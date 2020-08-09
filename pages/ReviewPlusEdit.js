import React, {useCallback, useEffect, useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {patchToReview, timesToDelete} from "../reducers/goods";

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
const ReviewPlusEdit = (props) => {
  const {id, title, contents, username} = props.route.params;
  // console.log("In ReviewPlusEdit props  : ", props);   //TODO : must check console.log for study
  const dispatch = useDispatch();
  const {patchReviewDone} = useSelector(state => state.goods)
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
      review_id : id,
    }
  }, [editTitle,editContent])


  const onPressEditReview = () => {
    // console.log('In ReviewPluseEdit modifiedReview : ', id);
    dispatch(patchToReview(modifiedReview))

    onChangeTextTitle(title)
    onChangeTextContent(contents)
    setTimeout(() => {
      props.navigation.goBack();
    }, 2000)
    dispatch(timesToDelete())
  }

  return (
    <Container>
      <Header props={props}/>

      <Contents>

        <View>
          <TextInputStyled placeholder={nonEditUserName} value={nonEditUserName} editable={false} />
          <TextInputStyled placeholder={editTitle} value={editTitle} onChangeText={(text) => onChangeTextTitle(text)} />
          <TextInputStyled placeholder={editContent} value={editContent} onChangeText={(text) => onChangeTextContent(text)} />
        </View>
        <Button title={"수정"} onPress={onPressEditReview} />

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default ReviewPlusEdit;
