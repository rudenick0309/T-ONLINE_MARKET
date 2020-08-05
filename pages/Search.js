import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, TouchableOpacity, Text, View, TextInput} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {connect, useDispatch, useSelector} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import * as Colors from "react-native-svg";
import {loadGoodsList} from "../reducers/goods";
import shortId from 'shortid'
import SearchList from "../components/SearchList";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const RowView = styled.View`
  flex-direction:row;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 30px 0px;
`;

const StyledTextInput = styled.TextInput`
  justify-content: center;
  align-items: center;
  width:70%;
  margin-bottom: 20px;
 
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left : 10px;
  margin-bottom: 20px;
`;


// function part
const Search = (props) => {
  console.log("In Search, props : ", props.route.params);
  const dispatch = useDispatch();
  const [value, onChangeText] = React.useState("");
  var resultOfSearching = useSelector((state) => state.goods?.goodsList[0]);
  console.log('In Search, resultOfSearching, : ',resultOfSearching)


  useEffect(() => {
    if (resultOfSearching && resultOfSearching.length > 0) {
      resultOfSearching = [];
    }
  }, [resultOfSearching]);

  const onChangeTextSearch = useCallback((text) => {
    onChangeText(text);
  }, []);

  const onPressSearch = useCallback(() => {
    console.log('In Search, onPressSearch, value : ', value)
    var data = {
      keyword: value,
      filter : null,
    }
    dispatch(loadGoodsList(data));
  }, [value])

  return (

    <Container>

      <Header props={props}/>

      <RowView style={styles.border}>
        <StyledTextInput
          style={{height: 40, borderColor: "gray", borderWidth: 1, imeMode:"active"}}
          onChangeText={text => onChangeText(text)}
          value={value}
        />

        <StyledTouchableOpacity onPress={onPressSearch}>
          <Icon name="ios-book-outline" size={30} color={"black"}></Icon>
        </StyledTouchableOpacity>

      </RowView>

      <Contents>
        {resultOfSearching&&resultOfSearching.map((el) => {
          return (
            <SearchList key={shortId.generate()} data={el}/>
          )
        })}

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default Search;

const styles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
  },

  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
});
