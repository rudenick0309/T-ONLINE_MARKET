import React, {useCallback, useEffect, useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {patchToReview, timesToDelete} from "../reducers/goods";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  padding : 10px;
`;

const Contents = styled.View`
  flex: 1;
  
`;

const TextInputStyled = styled.TextInput`
   margin-bottom: 10px;
  flex: 1;
  border: 2px solid grey  
  height: 50px;
  border-radius:10px;
`;

const TopTextView = styled.View`
  flex:0.7;
  opacity:0.2
  justify-content:center;
  align-items:center;
  margin: 20px 0px;
`;

const EditButton = styled.TouchableOpacity`
  flex:0.2;
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

const MiddleView = styled.View`
  flex:0.8
  margin : 30px 0px
  top: -50px
`;

//
const ReviewPlusEdit = (props) => {
  const {id, title, contents, username} = props.route.params;
  // console.log("In ReviewPlusEdit props  : ", props);   //TODO : must check console.log for study
  const dispatch = useDispatch();
  const {patchReviewDone} = useSelector(state => state.goods);
  // console.log('In ReviewPlusEdit patchReviewDone : ', patchReviewDone);

  const [editTitle, onChangeTextTitle] = useState(title);
  const [editContent, onChangeTextContent] = useState(contents);
  const [nonEditUserName, setNonEditUserName] = useState(username);

  var modifiedReview = null;

  const onChangeTextUserName = (text) => {
    // setEditUserName(text);
  };

  useEffect(() => {
    modifiedReview = {
      title: editTitle,
      contents: editContent,
      review_id: id,
    };
  }, [editTitle, editContent]);


  const onPressEditReview = () => {
    // console.log('In ReviewPluseEdit modifiedReview : ', id);
    dispatch(patchToReview(modifiedReview));

    onChangeTextTitle(title);
    onChangeTextContent(contents);
    setTimeout(() => {
      props.navigation.goBack();
    }, 2000);
    dispatch(timesToDelete());
  };

  return (
    <Container>
      <Header props={props}/>

      <Contents>

        <TopTextView>
          <Text>
            {
              `저희 제품을 구매해 주셔서 감사드립니다`
            }
          </Text>
          <Text>
            {
              `고객님의 소중한 후기가 저희에겐 큰 힘이 됩니다`
            }
          </Text>
        </TopTextView>

        <MiddleView>
          <TextInputStyled
            placeholder={nonEditUserName}
            value={nonEditUserName}
            editable={false}
          />

          <TextInputStyled
            placeholder={editContent}
            value={editContent}
            maxLength={200}
            multiline={true}
            onChangeText={(text) => onChangeTextContent(text)}
            editable={true}
          />
        </MiddleView>

        <EditButton onPress={onPressEditReview}>
          <EditButtonText>수정하기</EditButtonText>
        </EditButton>

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default ReviewPlusEdit;
