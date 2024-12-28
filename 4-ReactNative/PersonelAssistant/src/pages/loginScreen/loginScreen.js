import React,{useState} from "react";
import {Image,View,TextInput,TouchableOpacity,Button,StyleSheet,Text} from "react-native";

const loginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (username === 'a' && password === 'a') {
      navigation.navigate('Profile');
    } else {
      alert('Incorrect username or password');
    }
  };
 return(
<View style={styles.container}>
  <Image 
    source={{uri:'https://www.pngkey.com/png/detail/425-4259263_personal-assistant-logo.png'}}
    style={styles.ImagesStyle}/>
  <View style={styles.textInputView}>
    <TextInput 
     style={styles.textInput} 
     placeholder="User Name" 
     value={username}
     onChangeText={setUsername}
    />
    <TextInput 
     style={styles.textInput} 
     placeholder="Password"  
     secureTextEntry={true}
     value={password}
     onChangeText={setPassword}/>
     
    <TouchableOpacity style={styles.buttonStyle}>
     <Button color={"#00008b"} 
     title="Login" 
     onPress={handleLogin}/> 
    </TouchableOpacity>
  </View>           
</View>
);
};

const styles = StyleSheet.create({  
  container: { 
    flex: 1, 
    backgroundColor:'#1e90ff',  
  }, 
  buttonStyle:{   
    width:150,
    borderRadius:7,    
    backgroundColor:"yellow",   
    color:"a52a2a",
  },
  textInput:{
    backgroundColor:"white",
    fontSize: 20,    
    margin: 10,    
    height:45,
    width:260,
    borderRadius:7,
  },
  textInputView:{
    justifyContent: 'space-around',   
    alignItems: 'center',   
  },
  ImagesStyle:{
    height:100,
    width:200,
    justifyContent:"center",
    margin:50,
    marginBottom:80,
    borderRadius:7,
    alignSelf:"center",  
  },
});
export default loginScreen;