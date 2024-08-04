import React from "react";

import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './studentlist.styles'
import {COLORS, SIZES} from '../../constants/Colors'
import icon from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'
//import icon from '../../constants/icons'

export default function StudentListCard () {
    return(
        <SafeAreaView style={styles.topContainer}>
            <View style={styles.container}>
                <View style={{margin:5, marginLeft:20, borderRadius:100, height:50, width:50, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF'}}>
                    <Image source={icon.user} resizeMode="contain" style={{width:30, height:30}}/>
                </View>
                
                <View style={{marginLeft:20, flexDirection:'column', justifyContent:'space-evenly', marginTop:2}}> 
                    <Text style={{fontWeight:'700'}}>Joseph Israel</Text>
                    <Text>CPE/18/6661</Text>
                </View>

                <View>
                    <Text>100</Text>
                </View>
                <View>
                    <Text>EEE</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}