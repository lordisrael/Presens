import React from "react";

import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './ListCard.styles'
import {COLORS, SIZES} from '../../constants/Colors'
import icon from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ListCard () {
    const router = useRouter()
    return(
        <SafeAreaView style={styles.topContainer}>
            <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={() => router.push('/create')} >
                <Image source={icon.plus} resizeMode='cover' style={styles.btnImg('80%')}/>
                <Text style={{fontSize:11, marginBottom:2, textAlign:'center'}}>Create Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer} onPress={() => router.push('/register')} >
                <Image source={icon.add} resizeMode='cover' style={styles.btnImg('80%')}/>
                <Text style={{fontSize:11, marginBottom:2, textAlign:'center'}}>Register student</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <Image source={icon.bluetooth} resizeMode='cover' style={styles.btnImg('80%')}/>
                <Text style={{fontSize:11, marginBottom:2, textAlign:'center'}}>Connect device</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}