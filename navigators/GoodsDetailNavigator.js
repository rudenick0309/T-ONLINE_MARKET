import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Bucket from "../pages/Bucket";
import Payment from "../pages/Payment";
import TestPage from "../pages/TestPage";
import TestPageNav from "../pages/TestPageNav";
import Home from "../pages/Home";
import QnAPlusEdit from '../pages/QnAPlusEdit'
import QnAPlus from "../pages/QnAPlus";

const Stack = createStackNavigator();

const GoodsDetailNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bucket" component={Bucket}/>
      <Stack.Screen name="Payment" component={Payment}/>
      <Stack.Screen name="TestPage" component={TestPage}/>
      <Stack.Screen name="TestPageNav" component={TestPageNav}/>
      <Stack.Screen name="QnAPlusEdit" component={QnAPlusEdit}/>
      <Stack.Screen name="QnAPlus" component={QnAPlus}/>
    </Stack.Navigator>
  );
};

export default GoodsDetailNavigator;
