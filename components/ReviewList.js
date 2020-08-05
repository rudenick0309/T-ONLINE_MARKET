import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteToQuestion} from "../reducers/goods";
import ReviewPlusEdit from "../pages/ReviewPlusEdit";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

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

const ViewStyled = styled.View`
  flex: 1;
  margin: 20px 0px;
  padding: 10px;
  height: 150px;
  flex-direction:row;
`;

const ViewPaddingStyled = styled.View`
  padding-left : 10px;
`;

const TextStyled = styled.Text`
  flex: 1;
`;

const ButtonRowStyled = styled.View`
  flex-direction:row;
`;

const ButtonStyled = styled.Button`
  height : 50px;
  color : #e3dfc8;
  
`;

const ImageStyled = styled.Image`
  flex: 1;
  width:400px;
  height: 400px;
  resize-mode: contain;
  border-radius: 10px;
`;

//
const ReviewList = (props) => {
  console.log("In ReviewList, props : ", props);
  // const [replies, setReplies] = useState(false);
  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {review_img} = props.list;
  const {star} = props.list;
  const {id} = props.list;
  // const {reply} = props.list;
  const review = useSelector(state => state.goods?.review);
  const starStr = "*".repeat(star);
  const startArray = [<FontAwesomeIcon icon={faStar} size={15}/>];

  console.log("In ReviewList, startArray : ", startArray[0]);

  const {prop} = props.prop;  // for Route
  console.log("In ReviewList, prop : ", prop);

  // TODO : key props is undefined, Why?

  const onPressReview = useCallback(() => {
    // setReplies((prevState) => !prevState);
  }, []);

  const deleteReview = useCallback(() => {
    // console.log("In deleteQnA", id);
    dispatch(deleteToQuestion(id));
  }, []);

  return (
    <Container>
      <Contents>
        <ViewStyled>

          <ViewPaddingStyled>

            <TextStyled>
              {starStr}

              <View>
                <FontAwesomeIcon icon={faStar} size={15}/>
              </View>
              {/*  TODO : How the tag iterator about the quantity of the star number?*/}
            </TextStyled>

            <TextStyled>
              {contents}
            </TextStyled>

            <TextStyled>
              {username}
            </TextStyled>

            <ButtonRowStyled>
              <ButtonStyled
                title={"수정"}
                color={"#62760c"}
                onPress={() => {
                  prop.navigation.navigate("ReviewPlusEdit", {id, title, contents, username});
                }}/>
              <Text>{"   "}</Text>
              <ButtonStyled
                title={"삭제"}
                color={"#62760c"}
                onPress={deleteReview}/>
            </ButtonRowStyled>

          </ViewPaddingStyled>

          <View>
            <ImageStyled source={{uri: review_img}}/>
          </View>

        </ViewStyled>
      </Contents>

    </Container>
  );
};

export default ReviewList;


//
//
// <Container>
//   <Contents>
//     <ViewStyled>
//
//       {/*<TouchableTextStyled key={id} onPress={onPressReview}>*/}
//
//       {/*<TopViewStyled>*/}
//       <View>
//         <View>
//           <TextStyled>
//             {starStr}
//           </TextStyled>
//         </View>
//
//         {/*</TopViewStyled>*/}
//
//         <View>
//           <TextStyled>
//             {
//               `${contents}`
//             }
//           </TextStyled>
//
//           <TextStyled>
//             {
//               `${username} | 작성날짜는 여기에`
//             }
//           </TextStyled>
//         </View>
//         <View>
//           <ButtonStyled title={"수정"} onPress={() => {
//             prop.navigation.navigate("ReviewPlusEdit", {id, title, contents, username});
//           }}/>
//           <ButtonStyled title={"삭제"} onPress={deleteReview}/>
//         </View>
//       </View>
//
//       <View>
//         <ImageStyled source={{uri: review_img}}/>
//       </View>
//
//       {/*</TouchableTextStyled>*/}
//
//
//     </ViewStyled>
//   </Contents>
//
// </Container>
