import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="sign-in" options={{title:'Sign In', headerShown:false}}/>
        <Stack.Screen name='sign-up' options={{headerTitle: "Sign Up", headerShown:false}}/>
    </Stack>
  )
}

