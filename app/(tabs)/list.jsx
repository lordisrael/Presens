import { View,Image, StyleSheet, FlatList, Platform, Text,Pressable} from 'react-native';
import { useRouter, Stack } from 'expo-router';

import icon from '@/constants/icons'
import images from '@/constants/images'
import { COLORS, SIZES } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentList from '../../components/StudentList/studentList'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'



export default function HomeScreen() {
  const router = useRouter()
  return (
   
    <SafeAreaView style ={{flex:1,backgroundColor:COLORS.lightwhite}}>
    <Stack.Screen 
    options={{
      headerStyle:{backgroundColor:COLORS.white},
      headerShadowVisible: false,
      headerShown:true,
      headerTintColor:COLORS.darkQoutes,
      headerLeft:() => (
        <Pressable onPress={() => router.navigate('/(tabs)/home')}> 
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
      headerTitle:"Students Details",
    }}
  />
  <View>
               <FlatList data={[1,2]} renderItem={({item}) => (
                            <StudentList item={item}/>
                        )}
                        keyExtractor={item => item?.job_id}
                        
                        contentContainerStyle={{}}/>
  </View>
  </SafeAreaView>
  );
}