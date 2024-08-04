import { View,Image, StyleSheet, Platform, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useRouter, Stack } from 'expo-router';

import icon from '@/constants/icons'
import images from '@/constants/images'
import { COLORS, SIZES } from '@/constants/Colors';
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'
import { SafeAreaView } from 'react-native-safe-area-context';
import AttendanceListCard from '../../components/attendanceList';
import AuthContext from '../../context/GlobalProvider';
import { getAllAttendance } from '../../api/db';
import { useContext, useEffect, useState } from 'react';



export default function HomeScreen() {
  const router = useRouter()
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
  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightwhte, height:"100"}}>
      <View style={{paddingLeft:20, paddingHorizontal:20}}>
      <TouchableOpacity style={{margin:8, flexDirection:'row', alignItems:'center'}} onPress={() => router.back()}>
        <Image source={icon.left} style={{width:35, height:35}} resizeMode='contain'/>
        <Text style={{fontSize:20, paddingLeft:20, letterSpacing:1, fontFamily:"Poppins-SemiBold"}}>Attendance List</Text>
      </TouchableOpacity>
        {/* Header */}
            <View>
            {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <FlatList data={attendanceData} renderItem={({item}) => (
                            <AttendanceListCard item={item}/>
                        )}
                        keyExtractor={item => item?._id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{}}/> )}
            </View> 
          {/* List       */}
      </View>
    </SafeAreaView>
  );
}