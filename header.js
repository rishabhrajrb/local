
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,BackHandler } from 'react-native';



const Header = (props) => {

    const press = () => {
      //  props.navigation.goBack()
//BackHandler.exitApp();
     if(  props.isHome){
        BackHandler.exitApp();
     }else{
        props.navigation.goBack()
     }
    }
  

    return (
        <View style={style.container}>
            <Text style={style.header}>{props.title}</Text>


          {
            props?.isHide ? null :

            <TouchableOpacity onPress={() => press()}>
         
            <Image style={style.image} source= {  require('./Assets/arrow.png')} />


        </TouchableOpacity>
          }

        

        </View>

    )
}
const style = StyleSheet.create({


    container: {
        backgroundColor: 'pink',
     

        justifyContent: 'center',
        alignItems: 'center',
        borderCurve:'circular',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        

    },
    header: {


        color: 'black',
        minHeight: 42,
        fontSize: 20,

        fontWeight: 'bold',

    },

    image: {
        height: 35,
        width: 35,
        position: 'absolute',
        paddingEnd: 10,
        right: 140,
        bottom: 7,
      




    }



})


export default Header;