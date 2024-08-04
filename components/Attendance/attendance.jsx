import React, { useContext, useEffect, useState } from "react";

import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Pressable, ActivityIndicator } from 'react-native'
import styles from "../Attendance/attendance.styles";
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import icon from '../../constants/icons'
import { COLORS } from "@/constants/Colors";
import AttendanceCard from '../../components/common/card/attendanceCard'
import AuthContext from "@/context/GlobalProvider";
import {getAllAttendance} from '../../api/db'


export default function ListCard () {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {token} = useContext(AuthContext)
    useEffect(() => {
         const fetchAttendance = async () => {
           try {
             const result = await getAllAttendance(token);
             //console.log(result)
             setAttendanceData(result.data);
           } catch (error) {
             console.error("Failed to fetch attendance:", error);
           } finally {
            setLoading(false);
          }
         };
     
         fetchAttendance();
       }, [token]);
     
    //    if (!attendanceData) {
    //      return <Text>Loading...</Text>;
    //    }
    const router = useRouter()
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.ogaHeader} onPress={() => router.push('/attendance/attend')}>
                <Text style= {styles.topHeader}>Attendance List {">"}</Text>
            </TouchableOpacity>
            <View style={styles.subcontainer}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.text}>Course Code</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Date</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Number of students</Text>
                    </View>
                </View>
                {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
                <FlatList data={attendanceData} renderItem={({item}) => (
                            <AttendanceCard item={item}/>
                        )}
                        keyExtractor={item => item?._id}
                        
                        contentContainerStyle={{paddingBottom: 20}}/> )}
            </View>
           
        </SafeAreaView>
    )
}