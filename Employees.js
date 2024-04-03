import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage'






const Employees = (props) => {
    const [name, setname] = useState('');
    const [age, setAge] = useState('');
    const [EmployeeID, setemployeeID] = useState('');
    const [email, setemail] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [DOB, setDOB] = useState('');
    const [state, setState] = useState('');
    const [City, setCity] = useState('');

    const validateEmail = (email) => {

        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };



    const onpressSubmit = async () => {

        if (!name) {
            Alert.alert('Please Enter  Name')
            return;
        }
        if (!age) {
            Alert.alert('Pleas Enter  Age')
            return;
        }
        if (!EmployeeID) {
            Alert.alert('Please Enter Employees ID')
            return;
        }
        if (!email) {
            Alert.alert('Please Enter Email')
            return;
        }

        if (validateEmail(email)) {
        } else {
            Alert.alert('Please enter a valid email address.');
            return;
        };

        if (!phoneNo) {
            Alert.alert('Please Enter PhoneNO')
            return;

        }
        if (!DOB) {
            Alert.alert('Please Enter DOB')
            return;
        }
        if (!state) {
            Alert.alert('Please Enter State')
            return;
        }
        if (!City) {
            Alert.alert('Please Enter City')
            return;
        } else {
            saveData()
        }
    };

    const saveData = async () => {


        let emply = await AsyncStorage.getItem('employees')

        let employees = []
        if (emply) {
            employees = JSON.parse(emply)

        }
        /*  try {
              await AsyncStorage.setItem('Name', name)
              await AsyncStorage.setItem('Age', age)
              await AsyncStorage.setItem('EmployeeID', EmployeeID)
              await AsyncStorage.setItem('Email', email)
              await AsyncStorage.setItem('PhoneNO', phoneNo)
              await AsyncStorage.setItem('DOB', DOB)
              await AsyncStorage.setItem('State', state)
              await AsyncStorage.setItem('city', City)
              console.log('name', name)
          } catch (error) {
  
          }*/
        if (employees.length) {
            let emplyData = employees.filter((emply) => emply.employeeID == EmployeeID)
            if (emplyData.length) {
                Alert.alert('Please Enter your another Emply-ID ')
                return;
            }

        }

        let employees1 =
        {
            name: name,
            age: age,
            employeeid: EmployeeID,
            email: email,
            phoneno: phoneNo,
            dob: DOB,
            state: state,
            city: City
        }
        employees.push(employees1)


        await AsyncStorage.setItem('employees', JSON.stringify(employees))
        console.log('name', employees, name, age, EmployeeID, email, DOB, phoneNo, state, City,)
        props.navigation.navigate('Home')


    };



    return (


        <View style={{ backgroundColor: 'white' }}>

            <Header
                title={'Employees-Details'}
                isHide={false}
                navigation={props.navigation}
            />
            <ScrollView >
                <TextInput
                    style={[style.text, { marginTop: 40 }]}

                    placeholder='NAME'
                    onChangeText={(text) => { setname(text) }}
                    value={name}
                />
                <TextInput
                    style={style.text}
                    placeholder='AGE'
                    onChangeText={(text) => { setAge(text) }}
                    value={age}
                />
                <TextInput
                    style={style.text}
                    placeholder='EMPLOYEE-ID'
                    onChangeText={(text) => { setemployeeID(text) }}
                    value={EmployeeID}
                />
                <TextInput
                    style={style.text}
                    placeholder='EMAIL'
                    onChangeText={(text) => { setemail(text) }}
                    value={email}
                />

                <TextInput
                    style={style.text}
                    placeholder='PHONE-NO'
                    keyboardType='number-pad'
                    onChangeText={(text) => { setphoneNo(text) }}
                    value={phoneNo}
                    maxLength={10}

                />


                <TextInput
                    style={style.text}
                    placeholder='DATE OF BIRTHS'
                    onChangeText={(text) => { setDOB(text) }}
                    value={DOB}

                />
                <TextInput
                    style={style.text}
                    placeholder='STATE'
                    onChangeText={(text) => { setState(text) }}

                    value={state}
                />
                <TextInput
                    style={style.text}
                    placeholder='CITY'
                    onChangeText={(text) => { setCity(text) }}
                    value={City}
                />

                <TouchableOpacity style={style.btn} onPress={() => onpressSubmit()}>
                    <Text style={style.btn1}> Submit</Text>


                </TouchableOpacity>
            </ScrollView>
        </View>

    )
};

const style = StyleSheet.create({
    text: {

        fontSize: 20,
        borderColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 17,
        paddingVertical: 7,
        borderWidth: 2,
        marginBottom: 30,
        marginHorizontal: 20




    },
    btn: {
        backgroundColor: 'blue',
        borderRadius: 140,
        marginHorizontal: 90,
        padding: 10,
        alignItems: 'center',
        marginBottom: 90,
        marginTop: 20,
        height: 50


    },
    btn1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    }


})

export default Employees;