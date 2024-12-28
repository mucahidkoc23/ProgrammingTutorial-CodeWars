import React from "react";
import { Text ,View,StyleSheet,FlatList} from "react-native";
import {useSelector} from "react-redux";
import Products from "./Products";

const Cart = () => { 
 const selector = useSelector(s =>s.productsList)
  return(
    <View style={styles.container}>
      {selector.map(item => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2CD5C",
  },
})