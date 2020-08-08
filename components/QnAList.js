import React, {useCallback, useEffect, useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {
  addToReplyToQuestion,
  deleteToQuestion,
  deleteToReplyToQuestion,
  loadToQuestion, patchToReplyToQuestion,
  timesToDelete
} from "../reducers/goods";
import QnAPlusEdit from "../pages/QnAPlusEdit";
import GoodsDetail from "../pages/GoodsDetail";

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
  height: 100%;
  margin: 20px 0px;
  padding: 10px;
`;

const TextStyled = styled.Text`
  flex: 1;
  
  justify-content: space-between;
  
  
  border : 3px solid red;
`;

// below, styled-components does not support to 'Pressable'  T.T
// const TouchableTextStyled = styled.Pressable`
const TouchableTextStyled = styled.TouchableOpacity`
  flex: 1;
  border : 3px solid green;
`;

const ButtonStyled = styled.Button`
  height : 30px;
`;

//
const QnAList = (props) => {

  const [replies, setReplies] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [writing, onChangeWriting] = useState("");
  const [reReply, setReReply] = useState(false);
  const [reWriting, onChangeReWriting] = useState('');

  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {id} = props.list;
  const {reply} = props.list;
  const {prop} = props.prop;  // for Route
  const goodsId = prop.route.params.id;
  console.log("In QnAList, props : ", props.list);

  var text = null;
  var reData = null;

  const onPressReply = useCallback(() => {
    setReplies((prevState) => !prevState);
  }, []);

  const deleteQnA = useCallback(() => {
    dispatch(timesToDelete());
    let data = {
      qa_list_id: id
    };
    dispatch(deleteToQuestion(data));
  }, []);

  const onPressReplyToQnA = useCallback(() => {
    setOpenReply((prevState) => !prevState);
  }, []);

  useEffect(() => {
    text = {
      text: writing,
      qa_list_id: id,
    };

    reData = {
      reply_id: id,
      text: reWriting,
    }
    console.log("In QnAList, useEffect, text : ", text);
  }, [writing, reWriting]);

  const onPressReplyToRequest = useCallback(() => {
    dispatch(timesToDelete());
    console.log("In QnAList,onPressReplyToRequest, writing : ", writing);
    dispatch(addToReplyToQuestion(text));  // writing
  }, [writing]);

  const deleteReply = useCallback(() => {
    console.log('In QnAList, deleteReply, id : ', id);
    let data = {
      reply_id : id,
    };
    dispatch(deleteToReplyToQuestion(data));
    dispatch(timesToDelete());
  }, []);

  const onPressReReply = useCallback(() => {
    setReReply((prevState) => !prevState )
  }, [])

  const onPressReReplyToRequest = useCallback(() => {
    console.log('In QnAList, onPressReReplyToRequest, reData : ', reData);
    dispatch(timesToDelete())
    dispatch(patchToReplyToQuestion(reData))
  }, [reWriting])

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
              <TouchableTextStyled onPress={onPressReplyToQnA}>
                <Text>답글달기</Text>
              </TouchableTextStyled>
            </TextStyled>
            {/*<ButtonStyled title={"답글 작성"} onPress={() => {}}/>*/}
            {
              openReply
                ?
                (
                  <View>
                    <TextInput
                      maxLength={200}
                      multiline={true}
                      value={writing}
                      onChangeText={(text) => onChangeWriting(text)}
                    />
                    <TouchableTextStyled onPress={onPressReplyToRequest}><Text>작성</Text></TouchableTextStyled>
                  </View>
                )
                : (<></>)
            }
            {
              reReply
              ?
                (
                  <View>
                    <TextInput
                      maxLength={200}
                      multiline={true}
                      value={reWriting}
                      onChangeText={(text) => onChangeReWriting(text)}
                    />
                    <TouchableTextStyled onPress={onPressReReplyToRequest}><Text>수정</Text></TouchableTextStyled>
                  </View>
                )
                : (<></>)

            }
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
                    <ButtonStyled title={"수정"} onPress={onPressReReply} />
                    <ButtonStyled title={"삭제"} onPress={deleteReply}/>
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
