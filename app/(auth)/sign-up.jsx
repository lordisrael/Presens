import { View, Text, ScrollView, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import images from '../../constants/images'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import FormField from '../../components/formfield'
import CustomButton from '../../components/CustomButton'
import { Link, router, useRouter } from 'expo-router'
import { registerUser } from '../../api/db'
import AuthContext from '../../context/GlobalProvider'


export default function SignIn() {
  const router = useRouter()
  const { saveToken } = useContext(AuthContext);
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
      return;
    }
    setisSubmitting(true)
    setErrorMessage('');
    try {
      const result = await registerUser(form);
      console.log('API Result:', result);
      if (result.status === "Success") {
        router.replace('/(tabs)/home');
        saveToken(result.token)
      } else {
        setErrorMessage(result.msg || 'An unexpected error occurred');
      }
    } catch (error) {
      console.log('Error:', error);
      setErrorMessage(error.msg || 'An unexpected error occurred');
    } finally {
      setisSubmitting(false);
    }

  }
  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightwhite, height:'100%'}}>
       <StatusBar backgroundColor="#FAFAFC" style="dark"/>
       <ScrollView>
       <View style={{justifyContent:'center', width:'100%',  height:'100%', paddingLeft:26, paddingRight:26, marginTop:9, marginBottom:12}}>
       <Text style={{color:COLORS.darkQoutes, fontSize:24, fontFamily:'Poppins-Regular', fontWeight:'690',marginTop:30, marginBottom:12}}>Sign up to Presens</Text>
       <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({...form, email:e})} otherStyles={{marginTop:7}} keyboardType="email-address"/>
       <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({...form, password:e})} otherStyles={{marginTop:15}}/>
       {errorMessage ? (
            <Text style={{ color: 'red', fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 5 }}>{errorMessage}</Text>
          ) : null}
       {isSubmitting ? (
            <ActivityIndicator size="large" color={COLORS.primary2} style={{ marginTop: 14 }} />
          ) : (
            <CustomButton title="Sign Up" handlePress={submit} containerStyles={{ marginTop: 14 }} />
          )}
       {/* <CustomButton title="Sign In" handlePress={submit} containerStyles={{marginTop:14}} isLoading={isSubmitting}/> */}
       <View style={{justifyContent:'center', flexDirection:'row', marginTop:20, gap:8}}>
                <Text style={{fontFamily:'Poppins-Regular', fontSize:16, color:COLORS.darkQoutes}}>Already have an account?</Text>
                <Link href="/sign-in" style={{fontFamily:"Poppins-SemiBold", fontSize:16, color:COLORS.primary2}}>Sign In</Link>
            </View>
        </View>
       </ScrollView>
    </SafeAreaView>
  )
}