import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import GoodsDetail from '../pages/GoodsDetail';
import GoodsList from '../pages/GoodsList';
import Bucket from '../pages/Bucket';
import Payment from '../pages/Payment';
import QnAPlus from '../pages/QnAPlus';
import ReviewPlus from '../pages/ReviewPlus';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Mypage from '../pages/Mypage';
import Myinfocheck from '../pages/Myinfocheck';
import Myinfo from '../pages/Myinfo';
import Resign from '../pages/Resign';
import ResignCheck from '../pages/ResignCheck';
import QnAPlusEdit from '../pages/QnAPlusEdit';
import MypageSeller from '../pages/MypageSeller';
import Search from "../pages/Search";
import ReviewPlusEdit from "../pages/ReviewPlusEdit";
import QnAList from "../components/QnAList";
import QnADetailInfo from "../components/QnADetailInfo";
import BucketList from "../components/BucketList";


const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GoodsDetail" component={GoodsDetail}/>
      <Stack.Screen name="GoodsList" component={GoodsList}/>
      <Stack.Screen name="Payment" component={Payment}/>
      <Stack.Screen name="Bucket" component={Bucket}/>
      <Stack.Screen name="BucketList" component={BucketList}/>

      <Stack.Screen name="QnAPlus" component={QnAPlus}/>
      <Stack.Screen name="QnAList" component={QnAList}/>
      <Stack.Screen name="ReviewPlus" component={ReviewPlus}/>
      <Stack.Screen name="QnAPlusEdit" component={QnAPlusEdit}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="ReviewPlusEdit" component={ReviewPlusEdit}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Myinfocheck" component={Myinfocheck} />
      <Stack.Screen name="Myinfo" component={Myinfo} />
      <Stack.Screen name="Resign" component={Resign} />
      <Stack.Screen name="ResignCheck" component={ResignCheck} />
      <Stack.Screen name="MypageSeller" component={MypageSeller} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
