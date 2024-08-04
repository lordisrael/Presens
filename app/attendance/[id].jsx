import { View,Image, StyleSheet, Platform, Text, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useRouter, Stack } from 'expo-router';

import icon from '@/constants/icons'
import images from '@/constants/images'
import { COLORS, SIZES } from '@/constants/Colors';
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'
import { MaterialIcons } from '@expo/vector-icons';
import StudentList from '../../components/StudentList/studentList';



export default function HomeScreen() {
  const router = useRouter()
  return (
    <SafeAreaView>
    <Stack.Screen 
    options={{
      headerStyle:{backgroundColor:COLORS.white},
      headerShadowVisible: false,
      headerShown:true,
      headerTintColor:COLORS.darkQoutes,
      headerLeft:() => (
        <Pressable onPress={() => router.back()}> 
        <View style={{ paddingLeft: 9, flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="arrow-back" size={28} color={COLORS.darkQoutes} />
          {/* <ScreenHeaderBtn iconUrl={icon.chevronLeft} dimension="100%" /> */}
        </View>
        </Pressable>
      ),
      headerRight:() => (
        //<Link href='/profile' asChild>
        <View style={{ paddingRight: 15, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{backgroundColor:COLORS.white, borderRadius:10, borderWidth:1,  width:34, height:30, alignItems:'center'}}>
            <Text style= {{fontSize:20, fontWeight:'500', color:COLORS.darkQoutes}}>82</Text>
          </View>
        </View>
        //</Link>
      ),
      headerTitle:" ",
    }}
  />
  <View style={{paddingLeft:16, paddingRight:16}}>
    <View style={{flexDirection:'column', gap:8, marginTop:5, marginBottom:20}}>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:COLORS.darkQoutes, fontFamily:'Poppins-Regular', fontWeight:'700'}}>Course Code: </Text>
    <Text>CPE302</Text>
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:COLORS.darkQoutes, fontFamily:'Poppins-Regular', fontWeight:'700'}}>Course Tittle: </Text>
    <Text>Robotics</Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text style={{color:COLORS.darkQoutes, fontFamily:'Poppins-Regular', fontWeight:'700'}} >Date: </Text>
      <Text>July 27th</Text>
    </View>
    </View>
    <FlatList data={[1,2]} renderItem={({item}) => (
                            <StudentList item={item}/>
                        )}
                        keyExtractor={item => item?.job_id}
                        
                        contentContainerStyle={{}}/>
  </View>
  </SafeAreaView>
  );
}