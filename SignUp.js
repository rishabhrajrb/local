import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = (props) => {
    const Stack = createNativeStackNavigator();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
   const [show, setshow] = useState(false);
    const [confirmshow, setconfimshow] = useState(false);




    const onsubmitpress = async () => {

        if (!name) {

            Alert.alert('Please Enter Your Name ');
            return;
        }
        if (!email) {
            Alert.alert(' Please Enter Your Email');
            return;
        }
        if (!password) {
            Alert.alert(' Please Enter Your Password ');
            return;
        }
        if (!confirmpassword) {
            Alert.alert('please Enter Your Confirmpassword ');
            return;
        }
        if (password != confirmpassword) {
            Alert.alert('confirmpassword and password are not same');


        } else {
            saveData()
            props.navigation.navigate('Home', { name, email, password })
        }


    }
    const onLoginpress = () => {
        props.navigation.navigate('Appkishan')
    }


    const saveData = async () => {
        try {
            await AsyncStorage.setItem('Name', name)
            await AsyncStorage.setItem('Email', email)
            await AsyncStorage.setItem('Password', password)



        } catch (e) {


        }

    };






    return (
        <View>

            <TextInput
                style={style.textbox1}
                placeholder='Name'
                onChangeText={(text) => {

                    setName(text)
                }}
                value={name}

            />


            <TextInput style={style.textbox1}
                placeholder='Email'
                onChangeText={(text) => {

                    setEmail(text)
                }}
                value={email}
            />


            <TextInput
                style={style.textbox1}
                placeholder='Password'
                autoCorrect={false}
                secureTextEntry={!show}
                textContentType='password'
                onChangeText={(text) => { setPassword(text) }}
                value={password}
            />
            <TouchableOpacity onPress={() => (

                setshow(!show))


            }>
                <Image style={style.textbox4} source={show ? require('./Assets/eye.png') : require('./Assets/eye-off.png')} />

            </TouchableOpacity>


            <TextInput
                style={style.textbox1}
                placeholder='Confirm Passwords'
                autoCorrect={false}
                secureTextEntry={!confirmshow}
                textContentType='confirmpassword'
                onChangeText={(text) => setconfirmPassword(text)}
                value={confirmpassword}




            />
            <TouchableOpacity onPress={() => (

                setconfimshow(!confirmshow))


            }>
                <Image style={style.textbox4} source={confirmshow ? require('./Assets/eye.png') : require('./Assets/eye-off.png')} />

            </TouchableOpacity>




            <TouchableOpacity onPress={() => onsubmitpress()}>

                <Text style={style.textbox2} >Submit</Text>


            </TouchableOpacity>

            <TouchableOpacity onPress={() => onLoginpress()}>
                <Text style={style.textbox3}>Login</Text>

            </TouchableOpacity>


        </View>
    )
}
const style = StyleSheet.create({
    textbox1: {
        fontSize: 22,
        borderColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 7,
        fontFamily: 'regular',
        borderWidth: 2,
        margin: 10,

        borderRadius: 20,
    },
    textbox2: {
        color: 'white',
        fontSize: 20,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 100,
        margin: 10,
        lineHeight: 25,
        width: '50%',
        marginLeft: 88,
        textAlign: 'center',
        textAlignVertical: 'center',
        position: 'absolute',





    },
    textbox3: {
        color: 'black',

        height: 30,
        margin: 79,
        marginLeft: 150,
        lineHeight: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 22,
        height: 30,
        lineHeight: 12,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        position: 'absolute'


    },
    textbox4: {
        height: 16,
        width: 16,
        position: 'absolute',
        right: 20,
        bottom: 25,
    }






})
export default SignUp;