/**
 * @format
 */

import { AppRegistry, View, Text } from 'react-native';
import App from './Appkishan';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appkishan from './Appkishan';
import Signup from './SignUp'



const StackApp = () => {

    const Stack = createNativeStackNavigator();
    return (





        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: true,

                headerTintColor: 'white',
                headerTitleAlign: 'center',



                headerStyle: {

                    backgroundColor: 'green',
                    
                    
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    
                }





            }}>

                <Stack.Screen name={'Appkishan'} component={Appkishan}
                    options={{
                        title: 'Login-page',


                    }} />
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Signup'} component={Signup} />


            </Stack.Navigator>
        </NavigationContainer>


    )
}

AppRegistry.registerComponent(appName, () => StackApp);
