import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/Colors'

export default function CustomButton({title, handlePress, containerStyles, textStyles, isLoading}) {
  return (
    <TouchableOpacity style={{backgroundColor:COLORS.primary2, alignItems:'center', borderRadius:10, justifyContent:'center', height:62, opacity: isLoading ? 0.5 : 1, 
    ...containerStyles}} onPress={handlePress} activeOpacity={0.7} >
        <Text style={{fontSize:18, fontFamily:'Poppins-SemiBold', color:COLORS.primary}}>{title}</Text>
    </TouchableOpacity>
  )
}