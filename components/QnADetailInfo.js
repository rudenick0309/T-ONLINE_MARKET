import React, {useEffect} from "react";
import {Text, View} from "react-native";
import QnAList from "./QnAList";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_QUESTION_REQUEST, loadToQuestion} from "../reducers/goods";
import shortId from 'shortid'

// qna detail part
const QnADetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  border: 5px solid green;
`;

const QnAheader = styled.View`
  flex-direction : row;
  justify-content : space-around;
`;

const QnAButtonDetailInfoOfBottom = styled.Button`
  height: 150px;
  width : 400px;
  border: 20px solid black;
`;

// function part
const QnADetailInfo = (props) => {
  console.log('In QnADetailInfo, props : ', props);
  const id = props.prop?.route.params.id
  const dispatch = useDispatch();
  const loadQnAError = useSelector((state) => state.goods?.loadQnAError);
  console.log('In QnADetailInfo, loadQnAError : ', loadQnAError);

  var qna = useSelector(state => state.goods?.qna);
  console.log('In QnADetailInfo, qna : ', qna);
  // if (loadQnAError) {
  //   console.log('In QnADetailInfo At IF, id : ', id)  //id : 9,
  //   qna = [];
  // }

 useEffect(() => {
    dispatch(loadToQuestion(id))
 },[])

  return (
    <QnADetailInfoOfBottom>
      <QnAheader>
        <Text>궁금한 점을 남겨주세요.</Text>
        <QnAButtonDetailInfoOfBottom
          title={"글쓰기"}
          onPress={() => {
            props.prop.navigation.navigate("QnAPlus", {id:id});
          }}
        />
      </QnAheader>
      { qna && qna.length === 0
        ? <Text>등록된 QnA가 없습니다</Text>
        : (qna.map(el => {
          return <QnAList key={shortId.generate()} list={el} prop={props}/>;
        }))
      }
    </QnADetailInfoOfBottom>
  )
}

export default QnADetailInfo;
