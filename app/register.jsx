import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/Colors'
import FormField from '../components/formfield'
import icon from "../constants/icons"
import { useRouter } from 'expo-router'
import { BleManager } from 'react-native-ble-plx';
import CustomButton from '../components/CustomButton'
import { SelectList } from 'react-native-dropdown-select-list'

export default function register() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    matricno: '',
    department: '',
    level: '',
    fingerprint: fingerprint
  });
  const [selected, setSelected] = useState('')
  //const manager = new BleManager();
  const [fingerprint, setFingerprint] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const data = [
    "CPE", "EEE", "ICE"
  ]

  const level =[
    "100", "200", "300", "400", "500"
  ]

  const handleSelect = (value) => {
    setSelected(value);
    setForm({ ...form, department: value });
  };

  const handleSelectLevel = (value) => {
    setSelected(value);
    setForm({ ...form, level: value });
  };

  const submit =  () => {
    Alert.alert("Success", "Student registration successfully");
    router.push("/(tabs)/home");
  }

  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightwhite, height:'100%'}}>
      <ScrollView style={{paddingLeft:20, paddingRight:20, marginTop:20}}>
          <TouchableOpacity style={{marginBottom:20}} onPress={() => router.push('/(tabs)/home')}>
            <Image source={icon.close} resizeMode='center' style={{width:15,height:15}}/>
          </TouchableOpacity>
          <Text style={{color:COLORS.darkQoutes,fontSize:22, fontFamily:'Poppins-SemiBold'}}>Register student</Text>
          <FormField
          title="Name:"
          value={form.name}
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles={{marginTop:10}}
        />
        <FormField
          title="Matric No:"
          value={form.matricno}
          handleChangeText={(e) => setForm({ ...form, matricno: e })}
          otherStyles={{marginTop:10}}
        />
        <View style={{marginTop:7}}>
        <Text style={{fontSize: 16,
          color: COLORS.darkQoutes,
          fontFamily: "Poppins-Medium",}}>Department</Text>
        <SelectList data={data} boxStyles={{width: "100%",
          height: 48,
          backgroundColor: "#fff",
          borderColor: COLORS.secondary,
          // flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",}} inputStyles={{ flex: 1,
            color: "#7b7b8b",
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,}}  setSelected={handleSelect}/>
        </View>

        <View style={{marginTop:7}}>
        <Text style={{fontSize: 16,
          color: COLORS.darkQoutes,
          fontFamily: "Poppins-Medium",}}>Level:</Text>
        <SelectList data={level} boxStyles={{width: "100%",
          height: 48,
          backgroundColor: "#fff",
          borderColor: COLORS.secondary,
          // flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",}} inputStyles={{ flex: 1,
            color: "#7b7b8b",
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,}}  setSelected={handleSelectLevel}/>
        </View>
        <View style={{marginTop:10, marginBottom:10}}>
        <Text style={{fontFamily:"Poppins-Medium", fontSize: 16,
          color: COLORS.darkQoutes,}}>Fingerprint: </Text>
        </View>


          {isSending ? (
            <ActivityIndicator size="large" color={COLORS.primary2} style={{ marginTop: 14 }} />
          ):(
            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginBottom:20, backgroundColor:COLORS.lightwhite}}>
            <Image source={icon.fingerprint} resizeMode='contain' style={{height:80, width:80, tintColor: COLORS.primary2,}}/>
        </TouchableOpacity>
          )}
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