import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
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

// function part
const Bucket = (props) => {
  // console.log("In Bucket, props : ", props);
  const count = props.route.params.count;
  const goods_img = props.route.params.goods_img;
  const goods_name = props.route.params.goods_name;
  const goods_price = props.route.params.goods_price;
  const id = props.route.params.id.id;

  const dispatch = useDispatch();
  const data = props.route.params;
  const strId = String(shortid.generate());
  const [useParsedData, setUseParsedData] = useState("");
  const reduxData = useSelector((state) => state.goods?.bucket);   // asyncStorage get data -> reduxData


  if (typeof useParsedData === "object") {
    // console.log("In Bucket, IF state, useParsedData : ", useParsedData);   // asyncStorage get data
    // dispatch(addToBucket(useParsedData));   //TODO : Why this dispatch sparkes the infinity-loop?
    reduxData.unshift(useParsedData);
    // console.log("In Bucket, reduxData : ", reduxData);
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
        {reduxData && reduxData.map( (el) => {
          return <BucketList key={shortid.generate()} data={el} props={props}/>
        } )}
      </Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Bucket;
