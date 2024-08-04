import React, { useContext, useEffect, useRef, useState } from "react";

import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Modal, StyleSheet, ActivityIndicator } from 'react-native'

import {COLORS, SIZES} from '../constants/Colors'
import icon from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from "expo-router";
import { BlurView } from 'expo-blur';
import base64 from "react-native-base64";
import AuthContext from "../context/GlobalProvider";
import { takeAttendance } from "../api/db";

export default function AttendanceListCard ({item}) {
    const [modalVisible, setModalVisible] = useState(false);
    const {token} = useContext(AuthContext)
    const [isStarted, setIsStarted] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
      fingerprint: 'AQIDBAU='
    });
    const [fingerprintResult, setFingerprintResult] = useState(null);
    const intervalRef = useRef(null);
    // const handleStartPress = async () => {
    //   if (isStarted) {
    //     // If already started, clicking 'Done' will reset
    //     setIsStarted(false);
    //     //clearInterval(intervalRef.current);
    //   } else {
    //     // If not started, clicking 'Start' will begin
    //     setIsStarted(true);
    //     setShowImage(true);
    //   }
    // };
    const router = useRouter()
    const handleFingerprintChange = (rawFingerprintData) => {
      const encodedFingerprint = base64.encode(rawFingerprintData);
      setForm({ fingerprint: encodedFingerprint });
    };
    // useEffect(() => {
    //   if (isStarted) {
    //     startAttendanceLoop();
    //   }
    // }, [isStarted]);
    // useEffect(() => {
    //   if (isStarted) {
    //     startAttendanceLoop();
    //     intervalRef.current = setInterval(() => {
    //       startAttendanceLoop();
    //     }, 1000);
    //   }
    //   return () => clearInterval(intervalRef.current);
    // }, [isStarted]);
    // const startAttendanceLoop = async () => {
    //   while(isStarted) {
    //     setIsSubmitting(true);
    //     try {
    //       const result = await takeAttendance(token, item._id, form);
    //       console.log('API Result:', result);
    //     if (result.status === "Success") {
    //       setFingerprintResult('success');
    //     } else {
    //       setFingerprintResult('failure');
    //     }
    //   }  catch (error) {
    //     console.log('Error:', error);
    //     setErrorMessage(error.msg || 'An unexpected error occurred');
    //     setFingerprintResult('failure');
    //   } finally {
    //     setIsSubmitting(false);
    //   }
    //   await new Promise(resolve => setTimeout(resolve, 1000));
    //   }
    // }

    const handleStartPress = () => {
      if (isStarted) {
          setIsStarted(false);
      } else {
          setIsStarted(true);
          setShowImage(true);
      }
  };

  useEffect(() => {
      if (isStarted) {
          intervalRef.current = setInterval(async () => {
              setIsSubmitting(true);
              try {
                  const result = await takeAttendance(token, item._id, form);
                  console.log('API Result:', result);
                  if (result.status === "Success") {
                      setFingerprintResult('success');
                  } else {
                      setFingerprintResult('failure');
                      setErrorMessage(result.message || 'An unexpected error occurred');
                  }
              } catch (error) {
                  console.log('Error:', error);
                  setErrorMessage(error.message || 'An unexpected error occurred');
                  setFingerprintResult('failure');
              } finally {
                  setIsSubmitting(false);
              }
          }, 1000);
      } else {
          clearInterval(intervalRef.current);
      }

      return () => clearInterval(intervalRef.current);
  }, [isStarted]);
    
  // useEffect(() => {
  //   // Simulate receiving raw fingerprint data from a device
  //   const rawFingerprintData = 'AQIDBAU='; // Replace with actual raw fingerprint data
  //   handleFingerprintChange(rawFingerprintData);
  // }, []);
      
    return(
        <SafeAreaView style={{backgroundColor:COLORS.lightwhite, borderRadius:20}}>
        <View style={{flexDirection:'row', gap:8}}>
            <TouchableOpacity style={{backgroundColor:COLORS.gray2, borderRadius:24, flexDirection:'row', marginLeft:10, marginTop:0, width:"77%", alignItems:'center', height:80}} onPress={() => router.navigate(`/attendance/${item.id}`)}>
            <View style={{margin:5, marginLeft:20, borderRadius:100, height:50, width:50, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF'}}>
                  <Image source={icon.attendance} resizeMode="contain" style={{width:30, height:30}}/>
            </View>
                <View>
                    <Text style={{fontFamily:'Poppins-SemiBold'}}>{item.course_code}</Text>
                    <Text>{item.course_title}</Text>
                </View>
                <View style={{marginTop:-30, borderRadius:10, height:"29%", alignItems:'center', justifyContent:'center', width:"29%", backgroundColor:COLORS.primary2}}>
                    <Text style={{color:"#fff", fontWeight:700}}>{item.dateCreated}</Text>
                </View>
                

            </TouchableOpacity>
            {/* <TouchableOpacity style={{width: 50, height: "100%",backgroundColor: COLORS.gray2, borderRadius: SIZES.meduim, justifyContent: "center",alignItems: "center"}}> */}
            <TouchableOpacity style ={{justifyContent:'center'}} onPress={() => setModalVisible(true)}>
                <Image source={icon.business} resizeMode="contain" style={{width:50, height:50, }} />
            </TouchableOpacity>
          </View>
          <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
        <BlurView intensity={1700} style={StyleSheet.absoluteFill}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Capture Fingerprint</Text>
            {/* Add more content here */}
            {isSubmitting && <ActivityIndicator size="large" color={COLORS.primary2} />}
            {showImage && !isSubmitting && (
              fingerprintResult === 'success' ? (
                <Image source={icon.fingerprintdone} resizeMode="contain" style={{ width: 60, height: 60, marginVertical: 15 }} />
              ) : fingerprintResult === 'failure' ? (
                <Image source={icon.fingerprintclose} resizeMode="contain" style={{ width: 60, height: 60, marginVertical: 15 }} />
              ) : null
            )}
            <View style={{flexDirection:"row", gap:50, marginBottom:-1}}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}  onPress={handleStartPress}
            >
              <Text style={styles.textStyle}>{isStarted ? 'Done' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
            </View>
            {errorMessage ? <Text style={{color: 'red', fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 5}}>{errorMessage}</Text> : null}
          </View>
        </View>
        </BlurView>
        </View>
      </Modal>
          </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 18,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: COLORS.primary2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 18,
    },
  });