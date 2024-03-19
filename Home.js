
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'



const Home = (props) => {



  const ongoBackPress = () => {
    props.navigation.navigate('Appkishan')
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {

    getData()
  }, [])
  const getData = async () => {
    const Name = await AsyncStorage.getItem('Name')
    const Email = await AsyncStorage.getItem('Email')
    const Password = await AsyncStorage.getItem('Password')
    setName(Name)
    setEmail(Email)
    setPassword(Password)

  }
  return (
    <View >

      <Text style={{ fontSize: 26 }}>{"Name:-"+name}</Text>
      <Text style={{ fontSize: 26 }}>{"Email:-"+email}</Text>
      <Text style={{ fontSize: 26 }}>{"Password:-"+password}</Text>


      <TouchableOpacity onPress={() => ongoBackPress()}>
                <Text style={style.Back}>Logout</Text>

            </TouchableOpacity>
    </View>


  );

};
const style = StyleSheet.create({
  Back: {
    fontSize: 20,
    margin: 350,
    backgroundColor: 'black',
    color: 'white',

    height: 45,
    borderRadius: 50,
    lineHeight: 25,
    width: '50%',
    marginLeft: 88,
    textAlign: 'center',
    textAlignVertical: 'center',





  }

})













export default Home;