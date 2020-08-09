import React, {useCallback, useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {patchToQuestion, timesToDelete} from "../reducers/goods";

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

const TextInputStyled = styled.TextInput`
  border: 3px solid red;
`;

//
const QnAPlusEdit = (props) => {
  const {id, title, contents, username} = props.route.params;
  // console.log("In QnAPlusEdit props  : ", props);   //TODO : must check console.log for study
  const dispatch = useDispatch();
  const {patchQnADone} = useSelector(state => state.goods)
  // console.log('In QnAEditPlus patchQnADone : ', patchQnADone);

  const [editTitle, onChangeTextTitle] = useState(title);
  const [editContent, onChangeTextContent] = useState(contents);
  const [nonEditUserName, setNonEditUserName] = useState(username);

  const modifiedQnA = {
    title: editTitle,
    contents: editContent,
    qa_list_id : id,
  }

  const onPressEditQnA = useCallback(() => {
    dispatch(timesToDelete())
    // console.log('In QnAPluseEdit modifiedQnA : ', id);
    dispatch(patchToQuestion(modifiedQnA))
    onChangeTextTitle(title)
    onChangeTextContent(contents)
    props.navigation.goBack();
  })

  return (
    <Container>
      <Header props={props}/>

      <Contents>

        <View>
          <TextInputStyled placeholder={nonEditUserName} value={nonEditUserName} editable={false} />
          <TextInputStyled placeholder={editTitle} value={editTitle} onChangeText={(text) => onChangeTextTitle(text)} />
          <TextInputStyled placeholder={editContent} value={editContent} onChangeText={(text) => onChangeTextContent(text)} />
        </View>
        <Button title={"수정"} onPress={onPressEditQnA} />

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default QnAPlusEdit;
