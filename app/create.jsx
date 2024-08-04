import { View, Text, ScrollView, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/Colors'
import { useRouter } from 'expo-router'
import icon from "../constants/icons"
import FormField from '../components/formfield'
import CustomButton from '../components/CustomButton'
import { registerAttendance } from '../api/db'
import AuthContext from '../context/GlobalProvider'

export default function create() {
  const router = useRouter()
  const {token} = useContext(AuthContext)
  const [form, setForm] = useState({
    course_code: '',
    course_title: '',
  });
  //const manager = new BleManager();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const submit =  async () => {
    if(!form.course_code || !form.course_title) {
      Alert.alert('Error', 'Please fill in all the fields')
      return;
    }
    setIsSubmitting(true)
    setErrorMessage('');

    try {
      const result = await registerAttendance(form, token);
      if (result.status === "Success") {
        Alert.alert("Success", "Attendance created successfully");
        router.replace('/(tabs)/home');
        //saveToken(result.token)
      } else {
        setErrorMessage(result.msg || 'An unexpected error occurred');
      } 
    } catch (error) {
      console.log('Error:', error);
      setErrorMessage(error.msg || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }

    // Alert.alert("Success", "Attendance created successfully");
    // router.push("/(tabs)/home");
  }

  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightwhite, height:'100%'}}>
      <ScrollView style={{paddingLeft:20, paddingRight:20, marginTop:20}}>
          <TouchableOpacity style={{marginBottom:20}} onPress={() => router.push('/(tabs)/home')}>
            <Image source={icon.close} resizeMode='center' style={{width:15,height:15}}/>
          </TouchableOpacity>
          <Text style={{color:COLORS.darkQoutes,fontSize:22, fontFamily:'Poppins-SemiBold'}}>Create attendance</Text>
          <FormField
          title="Course Code:"
          value={form.course_code}
          handleChangeText={(e) => setForm({ ...form, course_code: e })}
          otherStyles={{marginTop:10}}
        />
        <FormField
          title="Course Title:"
          value={form.course_title}
          handleChangeText={(e) => setForm({ ...form, course_title: e })}
          otherStyles={{marginTop:10}}
        />

        {/* <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginBottom:20, backgroundColor:COLORS.lightwhite}}>
            <Image source={icon.fingerprint} resizeMode='contain' style={{height:80, width:80, tintColor: COLORS.primary2,}}/>
        </TouchableOpacity> */}

        {isSubmitting ? (
            <ActivityIndicator size="large" color={COLORS.primary2} style={{ marginTop: 14 }} />
          ) : (
            <CustomButton title="Submit" handlePress={submit} containerStyles={{ marginTop: 14 }} />
          )}

      </ScrollView>
    </SafeAreaView>
  )
}