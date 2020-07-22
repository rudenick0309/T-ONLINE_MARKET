import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
// import SearchNavigator from './SearchNavigator';
import BucketNavigator from './BucketNavigator'

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeNavigator" component={ HomeNavigator } options={{ drawerLabel: '제 맘대로 홈' }}/>
      <Drawer.Screen name="BucketNavigator" component={ BucketNavigator } options={{ drawerLabel: '장바구니' }}/>
      {/* TODO : <Drawer.Screen name="BucketNavigator" component={ BucketNavigator } options={{ drawerLabel: '아무거나' }}/>*/}

    </Drawer.Navigator>
  )
}

export default AppNavigator;