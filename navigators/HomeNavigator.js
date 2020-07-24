import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../pages/Home";
import RecommendedFlower from "../components/RecommendFlower";
import BestFlower from "../components/BestFlower";
//TODO: import Login from '../pages/Login'
//TODO: import Logout from '../pages/Logout'
//TODO: import Mypage from '../pages/Myapge'
//TODO: import Signup from '../pages/Signup'
// import TestPage from '../pages/TestPage'
// import TestPageNav from '../pages/TestPageNav'
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Mypage from "../pages/Mypage";
import Myinfocheck from "../pages/Myinfocheck";
import Myinfo from "../pages/Myinfo";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      {/*<Stack.Screen name="RecommendedFlower" component={RecommendedFlower}/>*/}
      {/*<Stack.Screen name="BestFlower" component={BestFlower}/>*/}
      <Stack.Screen name="BestFlower" component={BestFlower}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      {/* TODO: <Stack.Screen name="Logout" component={Logout}/>*/}
       <Stack.Screen name="Mypage" component={Mypage}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Myinfocheck" component={Myinfocheck}/>
      <Stack.Screen name="Myinfo" component={Myinfo}/>
       {/* <Stack.Screen name="TestPage" component={TestPage}/>
       <Stack.Screen name="TestPageNav" component={TestPageNav}/> */}

    </Stack.Navigator>
  );
};

export default HomeNavigator;