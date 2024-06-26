import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, StatusBar, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';





const Appkishan = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setshow] = useState(false);

  const onLoginPress = async () => {

    const validateEmail = (email) => {

      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }




    if (!email) {
      Alert.alert(' Enter Your Email ');
      return;
    }
    if (validateEmail(email)) {

    } else {
      Alert.alert('Please Enter a Valid Email')
      return;
    }
    if (!password) {
      Alert.alert('Enter Your password');
      return;
    }

    let user = await AsyncStorage.getItem('userList')

    let userList = JSON.parse(user)
    if (userList) {

      let userData = userList.filter((user) => user.email == email && user.password == password)
      if (userData?.length) {
        await AsyncStorage.setItem('Logedinuser', JSON.stringify(userData[0]))

        props.navigation.navigate('Home'/*,{ user: userData[0] }*/)

        return

      }

      else {
        Alert.alert('Incorrect email or password');
      }



    }

  };


  const onSingUppress = () => {
    props.navigation.navigate('Signup')


  }






  return (

    <ScrollView style={{ backgroundColor: 'white', flexGrow: 1 }}>

      <Header
        title={'Login-page'}
        isHide={true}
        navigation={props.navigation}

      />

      <StatusBar

        backgroundColor='pink'
        barStyle={'dark-content'}


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

      <View >
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

        <View style={{ alignItems: 'center' }} >
          <Text onPress={() => onSingUppress()} style={style.textInput7}>SingUp</Text>


        </View>



      </View>



    </ScrollView >




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
    marginLeft: 15,
    lineHeight: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 330



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

    fontWeight: 'bold',

    width: 100,






    textAlign: 'center',
    textDecorationLine: 'underline',

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
