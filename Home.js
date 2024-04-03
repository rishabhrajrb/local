
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, BackHandler, StatusBar, FlatList, ScrollView } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';

const Home = (props) => {

  const onLogoutPress = () => {
    AsyncStorage.removeItem('Logedinuser')
    props.navigation.replace('Appkishan')

  }
  const onEmployeesPress = () => {
    props.navigation.navigate('Employees')

  }
  const GoTocalpress =()=>{
    props.navigation.navigate('Calculator')
  }

  //const [name, setName] = useState('')
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const [data, setData] = useState([])


  useEffect(() => {

    getData()

  }, [])
  const getData = async () => {
    // try {

    //   let userData = await AsyncStorage.getItem('Logedinuser')

    //   if (userData) {
    //     userData = JSON.parse(userData)
    //     setName(userData.name);
    //     setEmail(userData.email);
    //     setPassword(userData.password);

    //   } else {

    //   }
    // } catch {

    // }



    let emply = await AsyncStorage.getItem('employees')
    let employees = JSON.parse(emply)
    console.log('employees', employees)
    setData(employees)

    // setName(userList[0].name)
    //setEmail(userList[0].email)
    //setPassword(userList[0].password)

    //setName(props.navigation.state.params.user.name )
    // setEmail(props.navigation.state.params.user.email )
    //setPassword(props.navigation.state.params.user.password )
  }
  const renderItem = ({ item }) => {

    return (

      <View style={style.view}>

        <Text style={style.text1}>{'Name:-' + item.name}</Text>
        <Text style={style.text2}>{'Age:-' + item.age}</Text>
        <Text style={style.text3}>{'EmployeeID:-' + item.employeeid}</Text>
        <Text style={style.text3}>{'Email:-' + item.email}</Text>
        <Text style={style.text3}>{'Phone-No:-' + item.phoneno}</Text>
        <Text style={style.text3}>{'DOB:-' + item.dob}</Text>
        <Text style={style.text3}>{'state:-' + item.state}</Text>
        <Text style={style.text3}>{'City:-' + item.city}</Text>

      </View>

    );
  };

  return (
    <ScrollView>

      <View style={{ backgroundColor:'white'}} >



        <StatusBar

          backgroundColor='pink'
          barStyle={'dark-content'}


        />
        <Header
          title={'Home-page'}
          isHide={false}
          navigation={props.navigation}
          isHome={true}
        />

        <TouchableOpacity style={style.btn} onPress={() => onEmployeesPress()}>
          <Text style={style.btn1}> ADD Employees </Text>

        </TouchableOpacity>

        <FlatList
          data={data}
          renderItem={renderItem}
        // keyExtractor={item => item.id}
        />

        <TouchableOpacity style={style.Back} onPress={() => onLogoutPress()}>
          <Text style={style.Back1}>Logout</Text>

        </TouchableOpacity>

        <TouchableOpacity style={style.cal} onPress = {()=>GoTocalpress()}>
          <Text style={style.cal1}> Go To Calculator </Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );

};
const style = StyleSheet.create({
  Back: {
    marginHorizontal: 90,
    borderRadius: 50,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 20,
    height: 50




  },
  Back1: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',


  },
  view: {
    margin: 10,
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 10





  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',






  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'white'

  },
  text3: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',

  },
  btn: {

    marginHorizontal: 90,
    borderRadius: 50,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    marginTop: 10


  },
  btn1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

    alignItems: 'center',
    textAlignVertical: 'center'
  },
  cal: {
    backgroundColor: 'red',
    borderRadius: 50,

    padding: 10,
    marginHorizontal: 90,
    marginBottom: 40
  },
  cal1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  }

})













export default Home;