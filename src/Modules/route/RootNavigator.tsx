import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../onboarding/OnBoarding';
import HomeScreen from '../home/HomeScreen'

export default class RootNavigator extends React.Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'OnBoarding'} screenOptions={{headerShown:false}}>
                    <Stack.Screen name="OnBoarding" component={OnBoarding} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
