import React,{useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const Onboarding = ({navigation}) => {
  const NavigateToPage = () =>{
    navigation.navigate('Login');
  }; 
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome...</Text>
      <TouchableOpacity 
        style={styles.button}        
        color={"#F2921D"} 
        onPress={NavigateToPage} >
        <Text style={styles.buttonText} >LETS START</Text>
      </TouchableOpacity>
    </View>  
  );
};
export default Onboarding;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2CD5C",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:40,
    marginBottom:55,
    color:"#A61F69"    
  },
  button:{
    width:150,
    height:150,
    backgroundColor:"#F2921D",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:200,
  },
  buttonText:{
    fontSize:20,
    textAlign:"center",
    color:"#A61F69",
  },
});