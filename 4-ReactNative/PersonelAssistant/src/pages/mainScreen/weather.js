import React,{useCallback,useState} from "react";
import {Text,View, StyleSheet,TextInput, ActivityIndicator} from "react-native";
import axios from "axios";

const weather=()=>{
  const [input,setInput] = useState('');
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
  const api ={
    key:'bd4366290352c367e157bd9d602db103',
    baaseUrl:'http://api.openweathermap.org/data/2.5/',
  }
  const fetchDataHandler = useCallback(()=>{
    setLoading(true);
    setInput('');
    axios({
      method:'GET',
      url:`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
    .then(res=>{
      console.log(res.data);
      setData(res.data);
    })
    .catch(e=>console.dir(e))
    .finally(()=>setLoading(false));
  },[api.key,input])

  return(
    <View style={styles.root}>     
      <View>
        <TextInput 
          placeholder="City name..."
          onChangeText={text=>setInput(text)}
          value={input}
          placeholderTextColor={'#000'}
          style={styles.textInput}
          onSubmitEditing={fetchDataHandler}
        />
      </View>
      {loading && (
        <View>   
          <ActivityIndicator size={'large'} color="#000"/>   
        </View>    
      )}

      {data && (
        <View style={styles.infoView}>
          <Text style={styles.cityCountryText}>
            {`${data?.name},${data?.sys?.country}`}
          </Text> 
          <Text style={styles.dataText}>{new Date().toLocaleDateString()} </Text>
          <Text style={styles.tempText}>{`${Math.round(
            data?.main?.temp,
          )} °C`}</Text>
          <Text style={styles.minMaxText}>{`Min ${Math.round(
            data?.main?.temp_min,
          )} °C / Max ${Math.round(data?.main?.temp_max)} C`}</Text>
        </View>      
      )}
    </View>
  );
};
export default weather;

const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:"#1e90ff",
  },
  image:{ 
    flexDirection:"column",
  },
  textInput:{
    borderBottomWidth:3,
    padding:5,
    paddingVertical:20,
    marginVertical:100,
    marginHorizontal:10,
    backgroundColor:'#fff',
    fontSize:19,
    borderRadius:7,
    borderBottomColor:"#df8c00"
  },
  cityCountryText:{
    color:'#fff',
    fontSize:40,
    fontWeight:"bold",
  },
  infoView:{
    alignItems:"center",
  },
  dataText:{
    color:"#fff",
    fontSize:22,
    marginVertical:10,
  },
  tempText:{
    fontSize:45,
    color:"#fff",
    marginVertical:10,
  },
  minMaxText:{
    fontSize:22,
    color:"#fff",
    marginVertical:10,
    fontWeight:'500',
  }
 })