import React,{useState,useEffect} from "react";
import { Text,View,StyleSheet,FlatList,Image} from "react-native";
import axios from "axios";
import Products from "./Products";
import CarauselBanner from "./CarauselBanner";
import {useDispatch} from "react-redux";

const Home = ({navigation}) => {
  const dispatch =useDispatch();
  const[product,setProduct] = useState([]);
  
  const BannerNew= ()=>{
    let array = [];
    for(let i=0; i<=5; i++)
    {
      array.push(data.product.image[i]);
    }
  }
  const Handle = (id) =>{
   navigation.navigate(dispatch({type:"ADD_CART", payload:product}) /*,{id}*/ ); 
  }
useEffect(() =>{
  fetchData();
},[]);

  async function fetchData(){
    const response = await axios.get('https://dummyjson.com/products');
    setProduct(response.data.products);  
  } 
  const renderProduct = ({item}) => 
  <Products 
    images = {item.images[0]}
    title = {item.title}
    price = {item.price}
    press = {Handle /*(item.id)}*/ }
    //mydata={item}   
    />
  return(
    <View style={styles.container}>
      <CarauselBanner Banner={BannerNew}/>
      <FlatList 
        data = {product}
        renderItem = {renderProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2CD5C",
  },
  ImageSlider:{
    flexDirection:"row",
  },
})