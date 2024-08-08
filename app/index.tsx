import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { cn } from '@/utils/utils'




const App = () => {
  return (
    <View  className='flex-1 items-center justify-center'>
      <Text className={cn("text-3xl text-bold text-red-500 font-pblack ")}>hello world</Text>
      <Link href='/home'>go to home</Link>
    </View>
  )
}

export default App

