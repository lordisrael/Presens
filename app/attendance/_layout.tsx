import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="attend" options={{title:'Home', headerShown:false}}/>
        <Stack.Screen name='[id]' options={{headerTitle: "Attendance details", headerShown:false}}/>
        <Stack.Screen name='modal' options={{headerTitle: "Attendance details", headerShown:false}}/>
    </Stack>
  )
}

