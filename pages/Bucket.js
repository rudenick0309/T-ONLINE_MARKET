import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AsyncStorage from "@react-native-community/async-storage";
import shortid from 'shortid';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid blue
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid blue
`;


// function part
const Bucket = (props) => {
  console.log("In Bucket, props : ", props);
  const [useParsedData, setUseParsedData] = useState('');
  const count = props.route.params.count;
  const goods_img = props.route.params.goods_img;
  const goods_name = props.route.params.goods_name;
  const goods_price = props.route.params.goods_price;
  const id = props.route.params.id.id;
  const data = props.route.params;
  const strId = String(shortid.generate());

  console.log('In Bucket data : ', strId);
  let strData = JSON.stringify(data);

  const storeData = async ( value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(strId, jsonValue)
      console.log('In Bucket, storing success')
    } catch (e) {
      // saving error
      console.log(e);
    }
  }
  storeData(strData);

  useEffect(() => {
    const getData = async () => {
      console.log('In Bucket, getData : 1')
      try {
        console.log('In Bucket, getData : 2')
        const jsonValue = await AsyncStorage.getItem(strId)
        console.log('In Bucket, getData : 3')
        if (jsonValue != null) {
          console.log('In Bucket, getData : 4', jsonValue)
          let parsedData = JSON.parse(jsonValue)
          setUseParsedData(parsedData)
          console.log('In Bucket, useParsedData : ', useParsedData)
        } else {
          console.log('In Bucket, getData : error')
          return null;
        }
      } catch(error) {
        // error reading value
        console.log(error);
      }
    }
    getData();
  }, [])

  useEffect(() => {
    // storeData(strData);
    console.log('In Bucket, useEffect, useParsdData : ', useParsedData);
  }, []);

  // useEffect(() => {
  //   // getData();
  // }, [useParsedData])

  // useEffect(() => {
  //     setUseParsedData(JSON.parse(useParsedData));
  // console.log('In Bucket, out, useEffect,  2 result : ', useParsedData);

  // }, [useParsedData])

  console.log('In Bucket, out, 1 useParsdData : ', useParsedData);

  // TODO : first, How add accmulated data in AsyncStorage at the same key? Array? just how?
  // TODO : second, What shall is the key?


  return (

    <Container>
      <Header props={props}/>
      <Contents><Text>장바구니 페이지</Text></Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Bucket;
