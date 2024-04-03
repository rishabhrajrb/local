/**
 * @format
 */

import { AppRegistry, View, Text, TouchableOpacity, Image } from 'react-native';

import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appkishan from './Appkishan';
import Signup from './SignUp';

import Splash from './Splash';
import Employees from './Employees';
//import Calculator from './Calculator';
import Calculator from './Calculator';





const StackApp = () => {


    const Stack = createNativeStackNavigator();




    return (



        <NavigationContainer >

            <Stack.Navigator screenOptions={{
                headerShown: false,

            }}>
                <Stack.Screen name={'Splash'} component={Splash} />
                <Stack.Screen name={'Appkishan'} component={Appkishan} />
                <Stack.Screen name={'Home'} component={Home} />


                <Stack.Screen name={'Signup'} component={Signup} />
                <Stack.Screen name={'Employees'} component={Employees}/>
                <Stack.Screen name ={'Calculator'} component={Calculator}/>







            </Stack.Navigator>
        </NavigationContainer>


    )
}

AppRegistry.registerComponent(appName, () => StackApp);
