import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../pages/Home";
import RecommendedFlower from "../components/RecommendFlower";
import BestFlower from "../components/BestFlower";
//TODO: import Login from '../pages/Login'
//TODO: import Logout from '../pages/Logout'
//TODO: import Mypage from '../pages/Myapge'
//TODO: import Signup from '../pages/Signup'
import TestPage from '../pages/TestPage'
import TestPageNav from '../pages/TestPageNav'

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      {/*<Stack.Screen name="RecommendedFlower" component={RecommendedFlower}/>*/}
      {/*<Stack.Screen name="BestFlower" component={BestFlower}/>*/}
      <Stack.Screen name="BestFlower" component={BestFlower}/>
      {/* TODO: <Stack.Screen name="Login" component={Login}/>*/}
      {/* TODO: <Stack.Screen name="Logout" component={Logout}/>*/}
      {/* TODO: <Stack.Screen name="Mypage" component={Mypage}/>*/}
      {/* TODO: <Stack.Screen name="Signup" component={Signup}/>*/}
       <Stack.Screen name="TestPage" component={TestPage}/>
       <Stack.Screen name="TestPageNav" component={TestPageNav}/>

    </Stack.Navigator>
  );
};

export default HomeNavigator;