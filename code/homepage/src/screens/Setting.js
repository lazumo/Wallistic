import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme } from '@react-navigation/native';
import GlobalStyle from '../utils/GlobalStyle';
import Profile from './Profile';
import Home from './Home';


const Drawer = createDrawerNavigator();

const Setting = () => {
  return (
      <Drawer.Navigator screenOptions={{
        drawerType:"front",
        activeTintColor: 'red',
       }}
       initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} options={{title:'Home' ,headerShown:false}}/>
        <Drawer.Screen name="Account" component={Profile} options={{title:'Account',headerShown:false}}/>
        <Drawer.Screen name="Help and Support" component={Home} options={{title:'Help and Support' ,headerShown:false}}/>
      </Drawer.Navigator>
  );
};
export default Setting;