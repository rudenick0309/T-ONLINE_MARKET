import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {deleteToQuestion} from "../reducers/goods";
import QnAPlusEdit from "../pages/QnAPlusEdit";

// import navi

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid brown;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid pink;
`;

const TopViewStyled = styled.View`
  flex: 1;
  height: 100px;
  flex-direction : row;
  border: 2px solid pink;
`;

const ViewStyled = styled.View`
  flex: 1;
  height: 100px;
  border: 2px solid pink;
`;

const TextStyled = styled.Text`
  flex: 1;
  border: 2px solid pink;
`;

// below, styled-components does not support to 'Pressable'  T.T
// const TouchableTextStyled = styled.Pressable`
const TouchableTextStyled = styled.TouchableOpacity`
  flex: 1;
  border: 2px solid red;
`;

const RepliesViewStyled = styled.View`
  height: 100px;
`;

const ButtonStyled = styled.Button`
  height : 30px;
`;


// dummy data
var dummy = {
  "reply":
    [
      {
        "username": "정코딩",
        "text": "생화입니다",
        "createdAt": "2020-07-29T07:40:19.000Z"
      },
      {
        "username": "박코딩",
        "text": "조화인듯;;",
        "createdAt": "2020-07-29T07:40:19.000Z"
      }
    ]
};

//
const QnAList = (props) => {
  const [replies, setReplies] = useState(false);
  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {id} = props.list;
  const {reply} = props.list;
  console.log('In QnAList, reply : ', reply)

  const {prop} = props.prop;  // for Route
  // dummy = {...dummy, id}; // TODO: this line will be commented
  // const {reply} = dummy;

  // TODO : key props is undefined, Why?

  const onPressReply = useCallback(() => {
    setReplies((prevState) => !prevState);
  }, []);

  const deleteQnA = useCallback(() => {
    console.log("In deleteQnA", id);
    dispatch(deleteToQuestion(id));
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
                props.prop.navigation.navigate("QnAPlusEdit", {id, title, contents, username});
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
