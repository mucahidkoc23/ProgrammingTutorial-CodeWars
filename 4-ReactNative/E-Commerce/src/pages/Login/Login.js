import React, {useState} from 'react';
import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [login, setlogin] = useState(false);

  const handleLogin = () => {
    if (username === 'a' && password === 'a') {
      navigation.navigate('MainScreen');
      //  AsyncStorage.getItem('@Correct',JSON.stringify(setlogin(true)));
    } else {
      alert('Incorrect username or password');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171109424/89209165-ecommerce-icon-isolated-on-orange-round-button-abstract-illustration.jpg',
        }}
        style={styles.ImagesStyle}
      />
      <View style={styles.textInputView}>
        <View style={styles.IconStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="User Name"
            value={username}
            onChangeText={setUsername}
          />
          <Icon name="account" size={30} />
        </View>
        <View style={styles.IconStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Icon name="key" size={30} />
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
          <Text style={styles.buttonStyleTextStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2CD5C',
  },
  buttonStyle: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2921D',
    borderRadius: 7,
    color: '#F2921D',
    marginTop: 10,
  },
  buttonStyleTextStyle: {
    fontSize: 25,
    color: '#A61F69',
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 20,
    margin: 10,
    height: 45,
    width: 260,
    borderRadius: 7,
  },
  textInputView: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ImagesStyle: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    margin: 50,
    marginBottom: 50,
    borderRadius: 7,
    alignSelf: 'center',
  },
  IconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Login;
