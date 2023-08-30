import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/Routes'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#EFF0F5'} barStyle={'dark-content'} />
      <NativeBaseProvider
        config={{
          dependencies: {
            'linear-gradient': require('react-native-linear-gradient').default,
          },
        }}>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})