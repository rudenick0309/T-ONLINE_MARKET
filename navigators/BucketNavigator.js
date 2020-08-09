import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Bucket from "../pages/Bucket";
import BucketList from "../components/BucketList";
import Home from "../pages/Home";
import QnAPlusEdit from "../pages/QnAPlusEdit";
import QnAPlus from "../pages/QnAPlus";

const Stack = createStackNavigator();

const BucketNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bucket" component={Bucket}/>
      <Stack.Screen name="BucketList" component={BucketList}/>
      <Stack.Screen name="QnAPlusEdit" component={QnAPlusEdit}/>
      <Stack.Screen name="QnAPlus" component={QnAPlus}/>
    </Stack.Navigator>

  );
};

export default BucketNavigator;
