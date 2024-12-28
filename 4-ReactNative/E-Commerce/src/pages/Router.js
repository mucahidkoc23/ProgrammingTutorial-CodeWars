import React from "react";
import {View,Text,Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Login from "./Login/Login";
import Home from "./Main/Home";
import Cart from "./Main/Cart";
import AsyncStorageUse from "./AsyncStorage/AsyncStorageUse";
import Onboarding from "./Onboarding/Onboarding";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Provider from "../Redux/Provider";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown:false,tabBarIcon:()=><Icon name="home" size={30}/>}}/>
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{headerShown:false,tabBarIcon: ()=><Icon name="cart" size={30}/>}}/>    
    </Tab.Navigator>
  );
};
const Router = () =>{
  return(
   <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="MainScreen" component={Main} /> 
        </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
};
export default Router;