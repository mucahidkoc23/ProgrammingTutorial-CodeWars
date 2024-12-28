import React from "react";
import {StyleSheet,View,Text,} from "react-native";

const settings=()=>{
  return(
    <View style={styles.container}>
      <Text>welcome:{username}</Text>
    </View>
  );
};
export default settings;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1e90ff",
  }
})