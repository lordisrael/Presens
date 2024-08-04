import React from "react";

import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'

import styles from './welcome.styles'
import {COLORS, SIZES} from '../../constants/Colors'
import icon from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome () {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                        <TextInput 
                        style={styles.searchInput}
                        value=''
                        onChange={() =>{}}
                        placeholder='Input student matric No?'
                        />
                    </View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Image source={icon.search} resizeMode='contain' style={styles.searchBtnImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.WelcomeWrapper}>
                    <Text style={styles.userName}>Good Morning, Adrain</Text>
                    <Text style={styles.welcomeMessage}>''Truly, truly life has been a amazing to me''</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}