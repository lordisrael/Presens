
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, {Component, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import {LinearGradient} from 'expo-linear-gradient'

import icon from '@/constants/icons'
import images from '@/constants/images'
import { COLORS, SIZES } from '../constants/Colors'
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'


var {width, height} = Dimensions.get('window')
export default function HomeScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightwhite}}>
      <Stack.Screen 
    options={{
      headerStyle:{backgroundColor:COLORS.lightwhite},
      headerShadowVisible: false,
      headerShown:true,
      headerTintColor:COLORS.darkQoutes,
      headerLeft:() => (
        <Pressable style={{flexDirection:'row', width:40, alignItems:"center"}} onPress={() => router.back()}> 
        <View style={{ paddingLeft: 4 }}>
          <MaterialIcons name="arrow-back" size={28} color={COLORS.darkQoutes} />
          {/* <ScreenHeaderBtn iconUrl={icon.chevronLeft} dimension="100%" /> */}
        </View>
        </Pressable>
      ),
      headerTitle:"Profile",
    }}
  />
      <View style={{alignItems:'center', marginTop:20}}>
        <Image source={require('../assets/images/Profile.jpg')} resizeMode='contain' style ={{width:200, height:200, borderRadius:100} }/>  
        <Pressable style={{position:'absolute', bottom:5, right:'30%'}}>
          {/* <Ionicons name="ios-add-circle" size={40} color="blue"/> */}
          <Image source={require('../assets/icons/plus.png')} resizeMode='cover' style={{width:40, height:40, borderRadius:40}}/> 
        </Pressable> 
      </View>
      <View style={{marginTop:20, alignItems:'center'}}>
           <Text style={{fontFamily:'mont-bold'}}>ISRAEL </Text>
      </View>
        
        {/* Details */}
        <View style = {{marginTop:40, marginLeft:30, marginRight:30}}>
          <View style={{backgroundColor: COLORS.white,  borderRadius: SIZES.meduim,
    height: 200}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{fontFamily:'mont-regular', color:COLORS.gray2}}>Full name</Text>
              <Text style={{fontFamily:'mont-regular', color:COLORS.darkQoutes}}>JOSEPH ISRAEL</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{fontFamily:'mont-regular', color:COLORS.gray2}}>Mobile Number</Text>
              <Text style={{fontFamily:'mont-regular', color:COLORS.darkQoutes}}>+2349069569860</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{fontFamily:'mont-regular', color:COLORS.gray2}}>Email</Text>
              <Text style={{fontFamily:'mont-regular', color:COLORS.darkQoutes}}>josephisrael206@gmail.com</Text>
          </View>
          </View>
        </View>
    </SafeAreaView>
  );
}