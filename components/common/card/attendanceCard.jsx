import React, { useContext, useEffect, useState } from "react";
import { Link, router } from 'expo-router';
import { TouchableOpacity, Pressable, Text, Image, View } from 'react-native';

import styles from "./attenadanceCard.styles";
import AuthContext from "@/context/GlobalProvider";
export default function AttendanceCard({item}) {
     
    return (
        <Pressable style={styles.btnContainer} onPress={() => router.push(`/attendance/${item._id}`)}>
           <View>
                <Text>{item.course_code}</Text>
           </View>
           <View>
                <Text>{item.dateCreated}</Text>
           </View>
           <View>
                <Text>{item.studentsId.length}</Text>
           </View> 
        </Pressable>
        )

}