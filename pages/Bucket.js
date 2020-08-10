import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AsyncStorage from "@react-native-community/async-storage";
import shortid from "shortid";
import {useDispatch, useSelector} from "react-redux";
import {addToBucket} from "../reducers/goods";
import BucketList from "../components/BucketList";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const BottomView = styled.View`
  height: 70px;
  padding:20px;
  flex-direction:row;
  justify-content:space-around;
  background-color:white;
`;

const BottomAggregate = styled.View`
  justify-content:center;
`;

const BottomAggregateText = styled.Text`
  margin-bottom:5px;
`;

const BottomPayment = styled.View`
  justify-content:center;
  align-items:center;
  border: 2px solid grey;
  border-radius:10px;
  flex:0.4
  height:100%
`


// function part
const Bucket = (props) => {
  console.log("In Bucket, props : ", props);
  // const count = props.route.params.count;
  const count = props.route.params.count ? props.route.params.count : 1;
  const goods_img = props.route.params.goods_img;
  const goods_name = props.route.params.goods_name;
  const goods_price = props.route.params.goods_price;
  const id = props.route.params.id.id;

  const dispatch = useDispatch();
  const data = props.route.params;
  const strId = String(shortid.generate());
  const [useParsedData, setUseParsedData] = useState("");
  const reduxData = useSelector((state) => state.goods?.bucket);   // asyncStorage get data -> reduxData

  var quantityBefore = null;
  var priceBefore = null;
  var quantity = 0;
  var price = 0;

  if (typeof useParsedData === "object") {
    // console.log("In Bucket, IF state, useParsedData : ", useParsedData);   // asyncStorage get data
    // dispatch(addToBucket(useParsedData));   //TODO : Why this dispatch sparkes the infinity-loop?
    reduxData.unshift(useParsedData);

    let tempPriceM = [];
    reduxData.forEach((el) => {
      tempPriceM.push(el.count * el.goods_price);
    });

    quantityBefore = reduxData.reduce((a, c) => {
      // console.log("In Bucket, a : ", a);
      // console.log("In Bucket, c : ", c);
      a.push(c.count);
      return a;
    }, []);

    // priceBefore = reduxData.reduce((a,c) => {
    //   console.log('In Bucket, a : ', a)
    //   console.log('In Bucket, c : ', c)
    //   a.push(c.goods_price);
    //   return a;
    // },[])

    quantity = quantityBefore.reduce((a, c) => {
      return a + c;
    });

    price = tempPriceM.reduce((a, c) => {
      return a + c;
    });
    // price = priceBefore.reduce((a,c) => {
    //   return a + c;
    // })
    // console.log("In Bucket, tempPriceM : ", tempPriceM);
    // console.log("In Bucket, reduxData, quantity : ", quantity);
    // console.log("In Bucket, reduxData, price : ", price);
  }

  //   **********************************************************************   storing
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem(strId, jsonValue);

      let datas = AsyncStorage.getItem(strId);
      if (datas !== null) {
        console.log("In Bucket, storeData, datas : ", datas);
      }
    } catch (error) {
      console.log(error);
    }
  };
  storeData(data);


  // **************************************************************************    get
  useEffect(() => {

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(strId);

        if (jsonValue != null) {
          let parsedData = JSON.parse(jsonValue);
          setUseParsedData(parsedData);
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  // TODO : first, How add accmulated data in AsyncStorage at the same key? Array? just how?
  // TODO : second, What shall is the key?


  return (

    <Container>
      <Header props={props}/>
      <Contents>
        {reduxData && reduxData.map((el) => {
          return <BucketList key={shortid.generate()} data={el} props={props}/>;
        })}
      </Contents>

      <BottomView>
        <BottomAggregate>
          <BottomAggregateText>합계 수량 : {quantity}</BottomAggregateText>
          <Text>합계 금액 : {price.toLocaleString()}</Text>
        </BottomAggregate>

        <BottomPayment>
          <TouchableOpacity onPress={() => {
            return props.navigation.navigate("Payment");
          }}>
            <Text>구매하기</Text>
          </TouchableOpacity>
        </BottomPayment>
      </BottomView>

      <Nav props={props}/>
    </Container>
  );
};

export default Bucket;
