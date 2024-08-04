import { COLORS } from "../constants/Colors";
import { Text, View, ScrollView, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import images from '../constants/images'
import CustomButton from '../components/CustomButton'
import { StatusBar } from "expo-status-bar";
import { router, useRouter } from "expo-router";


export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView style={{height:'100%', backgroundColor:COLORS.white}}>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View style={{alignItems:'center', marginTop:20, width:'100%', height:'80%', }}>
          {/* <Image source={image.logo} style={{width:130, height:84}} resizeMode="contain"/> */}
          <Text style={{color:COLORS.primary2, fontFamily:'Poppins-Bold', fontSize:30}}>Presens</Text>
          <Image source={images.presens} style={{width:250, height:300}} resizeMode="contain"/>
          <View style={{position:'relative', marginTop:20}}>
            <Text style={{color:COLORS.darkQoutes,  fontFamily:"Poppins-Bold", textAlign:'center', fontSize:30}}>Biometric Attendance system with {''}
              <Text style={{color:COLORS.presens}}>Presens</Text>
            </Text>
            {/* <Image source={image.path} style={{width:136, height:15, position:'absolute', bottom:2, right:-26}} resizeMode='contain'/> */}
          </View>
          <CustomButton title={'Continue with email'} handlePress={()=>router.push('/(auth)/sign-in')} containerStyles={{width:"90%", marginTop:28,}}/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLORS.white} style="dark"/>
    </SafeAreaView>
  );
}
