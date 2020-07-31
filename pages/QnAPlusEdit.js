import React from "react";
import {View, Text} from "react-native";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styled from "styled-components";


// css part
const Container = styled.ScrollView`
  flex: 1;
  border: 3px solid blue
`;

const InContainer = styled.TouchableOpacity`
  border: 3px solid ivory
`;

const Contents = styled.View`
  flex: 1;
  border: 3px solid grey;
`;

const ImageView = styled.Image`
  flex:1
  border: 2px solid yellow;
`;

const TextView = styled.Text`
  color : red;
`;

const QnAPlusEdit = (props) => {

  const {id, title, content, userName} = props.route.params;
  console.log('In QnAPlusEdit props id, title, content: ', userName)   //TODO : must check console.log for study

  return (
    <Container>
      <Header props={props}/>

      <Contents>
        <Text>QnAPlusEdit 페이지</Text>
      </Contents>


      <Nav props={props}/>
    </Container>
  );
};

export default QnAPlusEdit;
