import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../pages/Home";
import GoodsDetail from "../pages/GoodsDetail";
import GoodsList from '../pages/GoodsList'
import Bucket from "../pages/Bucket";
import Payment from "../pages/Payment";
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
      <Stack.Screen name="GoodsDetail" component={GoodsDetail}/>
      <Stack.Screen name="GoodsList" component={GoodsList}/>
      <Stack.Screen name="Payment" component={Payment}/>
      <Stack.Screen name="Bucket" component={Bucket}/>

      {/* TODO: <Stack.Screen name="Login" component={Login}/>*/}
      {/* TODO: <Stack.Screen name="Logout" component={Logout}/>*/}
      {/* TODO: <Stack.Screen name="Mypage" component={Mypage}/>*/}
      {/* TODO: <Stack.Screen name="Signup" component={Signup}/>*/}

    </Stack.Navigator>
  );
};

export default HomeNavigator;
