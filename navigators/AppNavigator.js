import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
// import SearchNavigator from './SearchNavigator';
import BucketNavigator from './BucketNavigator';
import RecommendedFlower from '../components/RecommendedFlower';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="BucketNavigator"
        component={BucketNavigator}
        options={{drawerLabel: 'Bucket'}}
      />
      {/* TODO : <Drawer.Screen name="BucketNavigator" component={ BucketNavigator } options={{ drawerLabel: '아무거나' }}/>*/}
      {/*<Drawer.Screen name="LoginNavigator" component={ LoginNavigator } options={{ drawerLabel: '로그인 ( 지금은 홈 )' }}/>*/}
      {/*<Drawer.Screen name="RecommendedFlowerNavigator" component={ RecommendedFlowerNavigator } options={{ drawerLabel: '장바구니2' }}/>*/}
    </Drawer.Navigator>
  );
}

export default AppNavigator;
