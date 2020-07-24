import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Bucket from "../pages/Bucket";
import RecommendedFlower from "../components/RecommendedFlower";
import BestFlower from "../components/BestFlower";
import Home from "../pages/Home";

const Stack = createStackNavigator();

const BucketNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bucket" component={Bucket}/>
    </Stack.Navigator>

  );
};

export default BucketNavigator;
