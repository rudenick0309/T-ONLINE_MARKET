import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, TouchableOpacity, Text, View, TextInput} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {connect, useDispatch, useSelector} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import * as Colors from "react-native-svg";
import {loadGoodsList, loadSearchList} from "../reducers/goods";
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

// ime-mode:active;
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
  // console.log("In Search, props : ", props.route.params);
  const dispatch = useDispatch();
  const [value, onChangeText] = useState("");
  var searchList = useSelector((state) => state.goods?.searchList[0]);
  // console.log('In Search, searchList, : ',searchList)

  const errorMessage = useSelector((state) => state.goods?.loadSearchListError);
  console.log('In Search, errorMessage : ', errorMessage)

  useEffect(() => {
    if (searchList && searchList.length > 0) {
      searchList = [];
    }
  }, [searchList]);

  const onChangeTextSearch = useCallback((text) => {
    onChangeText(text);
  }, [value]);

  const onPressSearch = useCallback(() => {
    // console.log('In Search, onPressSearch, value : ', value)
    dispatch(loadSearchList(value));
  }, [value])

  return (

    <Container>

      <Header props={props}/>

      <RowView style={styles.border}>
        <StyledTextInput
          style={{height: 40, borderColor: "gray", borderWidth: 1}}
          onChangeText={text => onChangeText(text)}
          value={value}
        />

        <StyledTouchableOpacity onPress={onPressSearch}>
          <Icon name="ios-book-outline" size={30} color={"black"} />
        </StyledTouchableOpacity>

      </RowView>

      <Contents>
        {searchList&&searchList.map((el) => {
          return (
            <SearchList key={shortId.generate()} prop={props} data={el}/>
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
});
