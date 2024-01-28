import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Setting from './screens/Setting';

const isDarkMode = false;
const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '606060', // 设置背景颜色
    primary: '#8569F6', // 设置主要颜色
    text: 'white', // 设置文本颜色
    card: '#1E1E1E', // 设置卡片颜色
    border: '#1E1E1E', // 设置边框颜色
    notification: 'yellow', // 设置通知颜色
    headerTintColor: 'white', // 设置标题栏文本颜色
    // 添加其他您想要更改的颜色属性...
  },
};
const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // 设置背景颜色
    primary: '#8569F6', // 设置主要颜色
    text: 'black', // 设置文本颜色
    card: 'white', // 设置卡片颜色
    border: 'white', // 设置边框颜色
    notification: 'yellow', // 设置通知颜色
    headerTintColor: 'white', // 设置标题栏文本颜色
    // 添加其他您想要更改的颜色属性...
  },
};

export default function App() {
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme :LightTheme }>
        <Setting />
    </NavigationContainer>
  );
}

