import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cn } from '@/utils/utils'


type TabIconPropsType ={
    icon:ImageSourcePropType,
    color:string,
    name:string,
    focused:boolean,
    size?:number
    
} 

const TabIcon = ({icon,color,name,focused,size}:TabIconPropsType) => {
  
  return (
    <View className={cn(`flex items-center justify-center gap-2 mt-1`)}>
      <Image source={icon} resizeMode='contain' tintColor={color} className={cn("w-6 h-6",{"scale-105":focused})} />
      <Text className={cn("font-pregular text-xs text-white",{"font-psemibold text-sm":focused})} style={{color:color}} >
        {name}
      </Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({})