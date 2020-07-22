import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Bucket from "../pages/Bucket";
import RecommendedFlower from "../components/RecommendFlower";
import BestFlower from "../components/BestFlower";
import TestPage from "../pages/TestPage";
import TestPageNav from "../pages/TestPageNav";
import Home from "../pages/Home";

const Stack = createStackNavigator();

const BucketNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bucket" component={Bucket}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="TestPage" component={TestPage}/>
      <Stack.Screen name="TestPageNav" component={TestPageNav}/>
    </Stack.Navigator>
  );
};

export default BucketNavigator;