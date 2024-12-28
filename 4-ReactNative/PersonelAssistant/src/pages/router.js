import React from "react";
import { } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import loginScreen from "./loginScreen/loginScreen";
import mainScreen from "./mainScreen/mainScreen";
import settings from "./mainScreen/settings";
import weather from "./mainScreen/weather";
import note from "./mainScreen/note";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tabs=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Weather" 
        component={weather} 
        options={{headerShown:false}}/>
    <Tab.Screen name="Notes" component={note} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}
const Draw=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Status" component={Tabs} options={{headerShown:false}} />
      <Drawer.Screen name="User" component={settings} options={{headerShown:false}} />
    </Drawer.Navigator>
  );
}
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Assistant" component={loginScreen}/>
        <Stack.Screen name="Profile" component={Draw}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};