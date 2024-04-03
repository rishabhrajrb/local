import React from 'react';

import { Text, StatusBar, View, StyleSheet, Button, TouchableOpacity, TextInput, Image, Alert, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './Header';

const SignUp = (props) => {
    const Stack = createNativeStackNavigator();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [show, setshow] = useState(false);
    const [confirmshow, setconfimshow] = useState(false);


    const validateEmail = (email) => {

        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const onsubmitpress = async () => {

        if (!name) {

            Alert.alert('Please Enter Your Name ');
            return;
        }
        if (!email) {
            Alert.alert(' Please Enter Your Email');
            return;
        }

        if (validateEmail(email)) {
        } else {
            Alert.alert('Please enter a valid email address.');
            return;
        };

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
            // props.navigation.navigate('Home')
            //novigation.goBack()

        }


    }
    const onLoginpress = () => {
        props.navigation.navigate('Appkishan')
    }


    const saveData = async () => {

       // let user = await AsyncStorage.getItem('userList')

       // let userList = []
       // if (user) {
        //    userList = JSON.parse(user)

      //  }
        if (userList.length) {
            let userData = userList.filter((user) => user.email == email)
            if (userData.length) {
                Alert.alert('User already exist please login')
                return;
            }
        }
        let user1111 = {
            name: name,
            email: email,
            password: password
        }
        userList.push(user1111)
        await AsyncStorage.setItem('userList', JSON.stringify(userList))
        //  let email = await AsyncStorage.setItem('email')
      //  AsyncStorage.setItem('Logedinuser', JSON.stringify(user1111));
       // props.navigation.navigate('Home', { user: user1111 })
    };






    return (


        <View>
            <Header
                navigation={props.navigation}
                title={'Sing-Up-page'}
                

            />
            <StatusBar

                backgroundColor='pink'
                barStyle={'dark-content'}


            />

            <ScrollView>
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

                <View>
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

                </View>


                <View>
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
                </View>



                <View>



                    <Text onPress={() => onsubmitpress()} style={style.textbox2} >Submit</Text>


                </View>

                <View style={{ alignItems: 'center' }}>

                    <Text onPress={() => onLoginpress()} style={style.textbox3}>Login</Text>



                </View>

            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    textbox1: {
        fontSize: 22,
        borderColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 7,
        // fontFamily: 'regular',
        borderWidth: 2,
        margin: 10,
        marginTop: 30,

        borderRadius: 20,
    },
    textbox2: {
        color: 'white',
        fontSize: 20,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 100,
        margin: 10,
        marginLeft: 88,
        width: '50%',
        textAlign: 'center',
        textAlignVertical: 'center',
        position: 'absolute',

    },
    textbox3: {
        margin: 60,
        color: 'black',
        fontSize: 22,
        textDecorationLine: 'underline',
        fontWeight: 'bold',


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