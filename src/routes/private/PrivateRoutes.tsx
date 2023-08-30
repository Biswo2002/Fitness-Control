import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Private } from '../../screen';

const PrivateRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Login'
                component={Private.Login}
            />
            <Stack.Screen
                name='Home'
                component={Private.Home}
            />
        </Stack.Navigator>
    )
}

export default PrivateRoutes

const styles = StyleSheet.create({})