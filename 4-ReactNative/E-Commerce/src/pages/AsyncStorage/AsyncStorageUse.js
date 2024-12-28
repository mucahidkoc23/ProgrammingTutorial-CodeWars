import React,{useState} from "react";
import {View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageUse =async () =>{ 
  try {
    const [login, setlogin] = useState(true);
    const data =await AsyncStorage.getItem("KeepLoggin");
    setlogin(data);
  return login;
  } catch (error) {}  
}
export default AsyncStorageUse;