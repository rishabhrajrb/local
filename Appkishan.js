import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert,StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Appkishan = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setshow] = useState(false);
  

  const onLoginPress = async () => {


    const Email = await AsyncStorage.getItem('Email')
    const Password = await AsyncStorage.getItem('Password')



    if (email === Email && password === Password) {


      props.navigation.navigate('Home')
      return;
    } 
  
    
    if(!email){
      Alert.alert(' Enter Your Email ');
      return;
    }
   
   else if (!password){
    Alert.alert('Enter Your password');
  return;
  }
  
    
    else {

      Alert.alert('Incorrect email or password');
    }
  };


  const onSingUppress = () => {
    props.navigation.navigate('Signup')


  }






  return (

    <View>

<StatusBar

backgroundColor='green'
barStyle={'default'}


/>

      <View>
        <Image style={style.textImage} source={require('./Assets/logo1.png')} />
      </View>

      <TextInput
        style={style.textInput3}
        placeholder='ENTER User Email'
        onChangeText={(text) => setEmail(text)}
        value={email}

      />

      <View>
        <TextInput
          style={style.textInput4}
          placeholder='ENTER User Password'
          autoCorrect={false}
          secureTextEntry={!show}
          textContentType='password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          maxLength={15}

        />
        <TouchableOpacity onPress={() => {

          setshow(!show)
        }

        }
        >
          <Image style={style.textInput6} source={show ? require('./Assets/eye.png') : require('./Assets/eye-off.png')} />
        </TouchableOpacity>

      </View>




      <View>

        <TouchableOpacity activeOpacity={0} onPress={() => onLoginPress()}>
          <Text style={style.textInput5}>Login </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSingUppress()} >
          <Text style={style.textInput7}>SingUp</Text>
        </TouchableOpacity>



      </View>



    </View>



  );

};


const style = StyleSheet.create({

  textInput3: {
    fontSize: 18,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontFamily: 'regular',
    borderWidth: 2,
    margin: 10,
    marginTop: 50,
    borderRadius: 10,

  },
  textInput4: {

    fontSize: 18,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontFamily: 'regular',
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
  },

  textInput5: {
    color: 'white',
    fontSize: 20,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 200,
    margin: 10,
    marginLeft:15,
    lineHeight: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    position:'absolute',
    width:330



  },
  textInput6: {

    height: 16,
    width: 16,
    position: 'absolute',
    right: 20,
    bottom: 25,



  },
  textInput7: {
    color: 'black',
    fontSize: 20,
    height: 30,
    margin: 65,
    
    marginLeft:140,
    fontWeight: 'bold',
  lineHeight: 10,
   
    textAlignVertical: 'center',
    textDecorationLine: 'underline',
    position:'absolute'
  },
  textImage: {
    marginTop: 40,
    marginRight: 20,
    width: 100,
    height: 100,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    alignSelf: 'center',





  }


}
)







export default Appkishan;
