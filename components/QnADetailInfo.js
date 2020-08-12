import React, {useEffect} from "react";
import {Text, View} from "react-native";
import QnAList from "./QnAList";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_QUESTION_REQUEST, loadToQuestion} from "../reducers/goods";
import shortId from "shortid";

// qna detail part
const QnADetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

const QnAheader = styled.View`
  flex-direction : row;
  align-items:center;
  justify-content : space-around;
  margin-bottom : 20px;
`;

const QnAButtonDetailInfoOfBottom = styled.Button`
  height: 150px;
  width : 400px;
`;

// function part
const QnADetailInfo = (props) => {
  // console.log("In QnADetailInfo, props : ", props);
  const id = props.prop?.route.params.id;
  const dispatch = useDispatch();
  const qna = useSelector(state => state.goods?.qna);
  const timesQ = useSelector((state => state.goods?.times))
  // console.log("In QnADetailInfo, times : ", timesQ);
  // console.log("In QnADetailInfo, qna : ", qna);

  useEffect(() => {
    dispatch(loadToQuestion(id));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadToQuestion(id));
    }, 1000)
  }, [timesQ]);



  return (
    <QnADetailInfoOfBottom>
      <QnAheader>
        <Text>궁금한 점을 남겨주세요.</Text>
        <QnAButtonDetailInfoOfBottom
          title={"글쓰기"}
          color={"#535204"}
          onPress={() => {
            props.prop.navigation.navigate("QnAPlus", {id: id});
          }}
        />
      </QnAheader>
      {qna && qna.length === 0
        ? (<></>)
        : (qna[0].map(el => {
          return <QnAList key={shortId.generate()} list={el} prop={props}/>;
        }))
      }
    </QnADetailInfoOfBottom>
  );
};

export default QnADetailInfo;
