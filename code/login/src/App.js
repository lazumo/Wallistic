import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logging from './screens/Logging';
import StartPage from './screens/StartPage';
import LoadingPage from './screens/LoadingPage';
import Login from './screens/Login';
import Tutorial1 from './screens/Tutorial1';
import Tutorial2 from './screens/Tutorial2';
import Tutorial3 from './screens/Tutorial3';
import Tutorial4 from './screens/Tutorial4';
import Tutorial5 from './screens/Tutorial5';
import Tutorial6 from './screens/Tutorial6';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

 Stack = createStackNavigator();

export default function App() {

  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/> 
        <Stack.Screen name="Logging" component={Logging} options={{headerShown: false,}}/>
        <Stack.Screen name="StartPage" component={StartPage} options={{headerShown: false,}}/>
        <Stack.Screen name="Loading" component={LoadingPage} options={{headerShown: false,}}/>
        <Stack.Screen name="Tutorial6" component={Tutorial6} options={{headerShown: false,}}/>
        <Stack.Screen name="Tutorial5" component={Tutorial5} options={{headerShown: false,}}/>
        <Stack.Screen name="Tutorial4" component={Tutorial4} options={{headerShown: false,}}/>
        <Stack.Screen name="Tutorial3" component={Tutorial3} options={{headerShown: false,}}/>
        <Stack.Screen name="Tutorial2" component={Tutorial2} options={{headerShown: false,}}/>
        <Stack.Screen name="Tutorial1" component={Tutorial1} options={{headerShown: false,}}/>
        
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
