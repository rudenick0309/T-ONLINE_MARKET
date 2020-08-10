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
import {generate} from "shortid";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faGripLinesVertical} from "@fortawesome/free-solid-svg-icons";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  margin-top:10px;
  margin-left:10px;
  margin-right:10px;
  border : 1px
  border-color : grey;
  
  border-style : solid;
  border-radius : 20px;
`; // border-bottom-width: 1px;

const Contents = styled.ScrollView`
  flex: 1;
  margin-bottom: -20px;
  
`;

const ReContainer = styled.SafeAreaView`
  margin-top: -20px;
  margin-bottom: 20px;
  padding:10px;
  
`;

const ReContents = styled.View`
  flex: 1;
  padding:10px;
  
  align-items:center;
`;

const ReView = styled.View`
  flex:1;
  opacity:0.2
  margin-right:3px;
  padding:17px;
  justify-content:center;
  align-items: center;
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
  padding: 20px;
`;

const ReViewStyled = styled.View`
  flex: 1;
  height: 100%;
  margin : -10px;
  
  flex-direction: row;
  align-items:center;
  
  
`;

const TextStyled = styled.Text`
  flex: 1;
  justify-content: space-between;
`;

// below, styled-components does not support to 'Pressable'  T.T
// const TouchableTextStyled = styled.Pressable`
const TouchableTextStyled = styled.TouchableOpacity`
  flex: 1;
 
`;

const ReTouchableTextStyled = styled.TouchableOpacity`
   flex: 14;
   padding-top:15px;
   
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
`;

const ButtonStyled = styled.TouchableOpacity`
  height : 30px;
  background-color: #62760c; 
  margin-bottom:10px;
  border-radius: 5px;
  justify-content:center;
  align-items:center;
`;
const ReButtonStyled = styled.TouchableOpacity`
  height : 30px;
  background-color: #62760c; 
  
  
  border-radius: 5px;
  justify-content:center;
  align-items:center;
`;


const ButtonText = styled.Text`
  color:white;
`;
const ReButtonText = styled.Text`
  color:white;
  margin-top:2px;
`;

const ListLeftView = styled.View`
  flex:3.5
`;

const ReListLeftView = styled.View`
  flex:3.5
`;

const ListRightView = styled.View`
  flex:1
  justify-content: space-between;
`;

const ReListRightView = styled.View`
  flex:1
  justify-content: space-between;
  padding-right:10px;
  
`;

const ReplyView = styled.View`
  margin-top: 5px;
  flex-direction:row;
  border-top-width : 1px
  border-bottom-width: 1px;
  border-radius: 10px;
  border-style: dashed;
  
  
  opacity:0.5
  justify-content:space-between;
  align-items:center;
`;

//
const QnAList = (props) => {

  const [replies, setReplies] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [writing, onChangeWriting] = useState("");
  const [reReply, setReReply] = useState(false);
  const [reWriting, onChangeReWriting] = useState("");

  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {id} = props.list;
  const {reply} = props.list;
  const {prop} = props.prop;  // for Route
  const goodsId = prop.route.params.id;
  const replyId = reply.length ? reply[0].id : null;

  // console.log("In QnAList, props : ", props.list);

  // reply가 빈 배열이다? - length 가 0 이다
  // reply가 빈 배열이 아니다? id가 존재한다


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
      reply_id: replyId,
      text: reWriting,
    };
    // console.log("In QnAList, useEffect, text : ", text);
  }, [writing, reWriting]);

  const onPressReplyToRequest = useCallback(() => {
    dispatch(timesToDelete());
    // console.log("In QnAList,onPressReplyToRequest, writing : ", writing);
    dispatch(addToReplyToQuestion(text));  // writing
  }, [writing]);

  const deleteReply = useCallback(() => {
    // console.log('In QnAList, deleteReply, id : ', id);
    dispatch(timesToDelete());
    let data = {
      reply_id: replyId,
    };
    dispatch(deleteToReplyToQuestion(data));
  }, []);

  const onPressReReply = useCallback(() => {
    setReReply((prevState) => !prevState);
  }, []);

  const onPressReReplyToRequest = useCallback(() => {
    // console.log('In QnAList, onPressReReplyToRequest, reData : ', reData);
    dispatch(timesToDelete());
    dispatch(patchToReplyToQuestion(reData));
  }, [reWriting]);

  return (
    <Container>
      <Contents>
        <ViewStyled>

          <TouchableTextStyled key={id} onPress={onPressReply}>

            <TopViewStyled>
              <ListLeftView>
                <TextStyled>
                  {
                    `이름:   ${username}`
                  }
                </TextStyled>
                <TextStyled>
                  {
                    `제목:   ${title} `
                  }
                </TextStyled>
              </ListLeftView>

              <ListRightView>
                <ButtonStyled
                  // color={"#535204"}
                  onPress={() => {
                    prop.navigation.navigate("QnAPlusEdit", {id, title, contents, username});
                  }}
                >
                  <ButtonText>수정</ButtonText>
                </ButtonStyled>

                <ButtonStyled
                  // color={"#535204"}
                  onPress={deleteQnA}
                >
                  <ButtonText>삭제</ButtonText>
                </ButtonStyled>
                <ButtonStyled
                  onPress={onPressReplyToQnA}>
                  <ButtonText>답변 하기</ButtonText>
                </ButtonStyled>
              </ListRightView>

            </TopViewStyled>

            <TextStyled>
              {
                `내용 :   ${contents}`
              }

            </TextStyled>

            {
              openReply
                ?
                (
                  <ReplyView>
                    <ListLeftView>
                      <TextInput
                        maxLength={200}
                        multiline={true}
                        value={writing}
                        onChangeText={(text) => onChangeWriting(text)}
                      />
                    </ListLeftView>

                    <ListRightView>
                      <ReButtonStyled onPress={onPressReplyToRequest}>
                        <ButtonText>작성</ButtonText>
                      </ReButtonStyled>
                    </ListRightView>
                  </ReplyView>
                )
                : (<></>)
            }
          </TouchableTextStyled>


        </ViewStyled>
      </Contents>

      {
        replies
          ?
          reply.map(el => {
            return (
              <>
                <ReContainer key={generate().id}>

                  <ReContents>
                    <ReViewStyled>
                      <ReView>
                        <FontAwesomeIcon icon={faGripLinesVertical} size={60}/>
                      </ReView>

                      <ReTouchableTextStyled key={generate().id} onPress={onPressReply}>
                        <ReListLeftView>
                          <TextStyled>
                            {
                              `이름: ${el.username} `

                            }
                            {/*  작성일 : ${el.createdAt}*/}
                          </TextStyled>
                          <TextStyled>
                            {
                              ` 제목: ${el.text} `
                            }
                          </TextStyled>
                        </ReListLeftView>

                        <ReListRightView>
                          <ButtonStyled onPress={onPressReReply}>
                            <ButtonText>수정</ButtonText>
                          </ButtonStyled>

                          <ButtonStyled onPress={deleteReply}>
                            <ButtonText>삭제</ButtonText>
                          </ButtonStyled>
                        </ReListRightView>
                      </ReTouchableTextStyled>

                    </ReViewStyled>

                    {
                      reReply
                        ?
                        (

                        <ReplyView>
                          <ListLeftView>
                            <TextInput
                              maxLength={200}
                              multiline={true}
                              value={writing}
                              onChangeText={(text) => onChangeReWriting(text)}
                            />
                          </ListLeftView>

                          <ListRightView>
                            <ReButtonStyled onPress={onPressReReplyToRequest}>
                              <ButtonText>수정</ButtonText>
                            </ReButtonStyled>
                          </ListRightView>
                        </ReplyView>


                        )
                        : (<></>)

                    }
                  </ReContents>

                </ReContainer>
              </>
            );
          })
          : (<></>)
      }
    </Container>
  );
};

export default QnAList;
