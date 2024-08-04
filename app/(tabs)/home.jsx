import { View,Image, StyleSheet, Platform, Text, SafeAreaView } from 'react-native';
import { useRouter, Link,Stack} from 'expo-router';

import icon from '@/constants/icons'
import images from '@/constants/images'
import { COLORS, SIZES } from '@/constants/Colors';
import ScreenHeaderBtn from '@/components/common/header/screenHeaderBtn'
import Welcome from '@/components/Welcome/welcome'
import ListCard from '@/components/ListCard/ListCard'
import Attendance from '@/components/Attendance/attendance'

//const router = useRouter()
export default function HomeScreen() {
  const router = useRouter()
  return (
    <SafeAreaView style ={{flex:1,backgroundColor:COLORS.lightwhite}}>
    <Stack.Screen 
    options={{
      headerStyle:{backgroundColor:COLORS.lightwhite},
      headerShadowVisible: false,
      headerShown:true,
      headerLeft:() => (
        <View style={{ paddingLeft: 9, flexDirection: 'row', alignItems: 'center' }}>
          <ScreenHeaderBtn iconUrl={images.presens} dimension="100%" />
        </View>
      ),
      headerRight:() => (
        //<Link href='/profile' asChild>
        <View style={{ paddingRight: 15, flexDirection: 'row', alignItems: 'center' }}>
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={() => router.push('/profile')} />
        </View>
        //</Link>
      ),
      headerTitle:"Presens",
    }}
  />
  <View style={{flex:1, marginTop:-35, padding:SIZES.meduim}}>
    <Welcome />
    <ListCard />
    <Attendance />
  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
