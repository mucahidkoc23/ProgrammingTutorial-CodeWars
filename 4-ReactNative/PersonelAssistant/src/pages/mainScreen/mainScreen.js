import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";

const mainScreen=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
      title="Back" onPress={()=>navigation.goBack()}/>
    </View>
  );
};
export default mainScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1e90ff",
  }
})