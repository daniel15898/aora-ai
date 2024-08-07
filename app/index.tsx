import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'



const App = () => {
  return (
    <View style={styles.container} className='bg-slate-400'>
      <Text className='text-3xl text-red-400'>hello worlds</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})