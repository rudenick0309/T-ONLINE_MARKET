import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteToQuestion} from "../reducers/goods";
import QnAPlusEdit from "../pages/QnAPlusEdit";

// import navi

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  margin-top:10px;
  border-color : grey;
  border-bottom-width: 1.5px;
  border-style : solid;
  border-radius : 20px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const TopViewStyled = styled.View`
  flex: 1;
  height: 100px;
  flex-direction : row;
`;

const ViewStyled = styled.View`
  flex: 1;
  height: 100px;
  margin: 20px 0px;
  padding: 10px;
`;

const TextStyled = styled.Text`
  flex: 1;
`;

// below, styled-components does not support to 'Pressable'  T.T
// const TouchableTextStyled = styled.Pressable`
const TouchableTextStyled = styled.TouchableOpacity`
  flex: 1;
`;

const ButtonStyled = styled.Button`
  height : 30px;
`;



//
const QnAList = (props) => {
  const [replies, setReplies] = useState(false);
  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {id} = props.list;
  const {reply} = props.list;
  // const qna = useSelector(state => state.goods?.qna);
  // console.log('In QnAList, reply : ', reply)

  const {prop} = props.prop;  // for Route
  console.log('In QnAList, props : ', props)  //TODO: 1. When qna is empty, or full -> First, empty

  // dummy = {...dummy, id}; // TODO: this line will be commented
  // const {reply} = dummy;

  // TODO : key props is undefined, Why?

  const onPressReply = useCallback(() => {
    setReplies((prevState) => !prevState);
  }, []);

  const deleteQnA = useCallback(() => {
    console.log("In deleteQnA", id);
    let data = {
      qa_list_id: id
    }
    dispatch(deleteToQuestion(data));
  }, []);

  return (
    <Container>
      <Contents>
        <ViewStyled>

          <TouchableTextStyled key={id} onPress={onPressReply}>

            <TopViewStyled>
              <TextStyled>
                {
                  `제목: ${title} 이름: ${username}`
                }
              </TextStyled>
              <ButtonStyled title={"수정"} onPress={() => {
                prop.navigation.navigate("QnAPlusEdit", {id, title, contents, username});
              }}/>
              <ButtonStyled title={"삭제"} onPress={deleteQnA}/>
            </TopViewStyled>

            <TextStyled>
              {
                `내용 : ${contents}`
              }
            </TextStyled>

          </TouchableTextStyled>


        </ViewStyled>
      </Contents>
      {
        replies
          ?
          // TODO : createdAt will be transferred daily number using 'moment lib'
          reply.map(el => {
            return (
              <Contents>
                <TouchableTextStyled key={id} onPress={onPressReply}>
                  <TextStyled>
                    {
                      `이름: ${el.username}작성일 : ${el.createdAt}`
                      // ``
                    }
                  </TextStyled>
                  <TextStyled>
                    {
                      ` 제목: ${el.text} `
                    }
                  </TextStyled>

                </TouchableTextStyled>
              </Contents>
            );
          })
          : (<></>)
      }
    </Container>
  );
};

export default QnAList;
