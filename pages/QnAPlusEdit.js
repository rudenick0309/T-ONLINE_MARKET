import React, {useCallback, useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {patchToQuestion, timesToDelete} from "../reducers/goods";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.View`
  flex: 1;
  padding:10px;
`;

const TopTextView = styled.View`
  flex:0.7;
  opacity:0.2
  justify-content:center;
  align-items:center;
  margin: 20px 0px;
`;

const TextInputStyled = styled.TextInput`
  margin-bottom: 10px;
  flex: 0.5;
  border: 2px solid grey  
  height: 50px;
  border-radius:10px;
`;

const EditButton = styled.TouchableOpacity`
  flex:0.3;
  background-color:#535204;
  justify-content:center;
  align-items:center;
  border-radius:10px;  
`;

const EditButtonText = styled.Text`
  color:white;
  font-size:30px;
  letter-spacing:10px;
`;

//
const QnAPlusEdit = (props) => {
  const {id, title, contents, username} = props.route.params;
  // console.log("In QnAPlusEdit props  : ", props);   //TODO : must check console.log for study
  const dispatch = useDispatch();
  const {patchQnADone} = useSelector(state => state.goods);
  // console.log('In QnAEditPlus patchQnADone : ', patchQnADone);

  const [editTitle, onChangeTextTitle] = useState(title);
  const [editContent, onChangeTextContent] = useState(contents);
  const [nonEditUserName, setNonEditUserName] = useState(username);

  const modifiedQnA = {
    title: editTitle,
    contents: editContent,
    qa_list_id: id,
  };

  const onPressEditQnA = useCallback(() => {
    dispatch(timesToDelete());
    // console.log('In QnAPluseEdit modifiedQnA : ', id);
    dispatch(patchToQuestion(modifiedQnA));
    onChangeTextTitle(title);
    onChangeTextContent(contents);
    props.navigation.goBack();
  });

  return (
    <Container>
      <Header props={props}/>

      <Contents>
        <TopTextView>
          <Text>
            {
              `질문은 200자로 제한되오며,`
            }
          </Text>
          <Text>
            {
              `악의적인 공격성 글은 가슴이 아파요.`
            }
          </Text>
        </TopTextView>


        <TextInputStyled
          placeholder={nonEditUserName}
          value={nonEditUserName}
          editable={false}
        />
        <TextInputStyled
          maxLength={200}
          multiline={true}
          placeholder={editTitle}
          value={editTitle}
          onChangeText={(text) => onChangeTextTitle(text)}
          editable={true}
        />

        <TextInputStyled
          maxLength={200}
          multiline={true}
          placeholder={"변경할 내용을 입력해 주세요"}
          value={editContent}
          onChangeText={(text) => onChangeTextContent(text)}
          editable={true}
        />

        <EditButton onPress={onPressEditQnA}>
          <EditButtonText>수정하기</EditButtonText>
        </EditButton>

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default QnAPlusEdit;
