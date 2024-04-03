import React, { useEffect } from 'react'
import { Text, View, StatusBar, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = (props) => {
  useEffect(() => {

    checkLogin();
  }, [])



  
  const checkLogin = async () => {
   
    let loginuser = await AsyncStorage.getItem('Logedinuser')
    setTimeout(() => {
    
   
    if (loginuser) {
      props.navigation.replace('Home')

    } else {
      props.navigation.replace('Appkishan')
      
    }
  },0.1000);
  }
  return (


    <View style={{ backgroundColor: 'white', flex: 1 }}>

      <StatusBar

        backgroundColor='#435A64'
        barStyle={'light-content'}


      />


      <Image style={style.Image} source={require('./Assets/mm2.jpg')} />


      <Text style={style.text}>Contact Us</Text>
    </View >

  )
};

const style = StyleSheet.create({
  Image: {
    marginTop: 270,
    marginRight: 40,
    width: 90,
    height: 90,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    alignSelf: 'center',
    position: 'absolute',


  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 500,
    marginLeft: 110,

  }


})
export default Splash;