import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";

import useBLE from '../bluetooth/bluetooth'
import { COLORS } from '../constants/Colors';
import DeviceModal from '../components/deviceModal';

export default function connect() {
  const [isModalVisible, setIsModalVisible] = useState(false);
    const {
        requestPermissions,
        scanForPeripherals,
        connectedDevice,
        disconnectFromDevice,
        connectToDevice,
        allDevices
      } = useBLE();

      const scanForDevices = async () => {
        const isPermissionsEnabled = await requestPermissions();
        if (isPermissionsEnabled) {
          scanForPeripherals();
        }
      };
      const hideModal = () => {
        setIsModalVisible(false);
      };
    
      const openModal = async () => {
        scanForDevices();
        setIsModalVisible(true);
      };
          
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightwhite}}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontFamily:'Poppins-SemiBold', color:COLORS.darkQoutes, textAlign:'center'}}>Pkease Connect to a Fingerprint device</Text>
      </View>
      <TouchableOpacity onPress={connectedDevice ? disconnectFromDevice: openModal} style={{backgroundColor:COLORS.primary2, alignItems:'center', borderRadius:10, justifyContent:'center', height:62, opacity: isLoading ? 0.5 : 1}} activeOpacity={0.7}>
        <Text style={{fontSize:18, fontFamily:'Poppins-SemiBold', color:COLORS.primary}}>
          {connectedDevice ? "Disconnect" : "Connect"}
        </Text>
      </TouchableOpacity>
      <DeviceModal 
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
    </SafeAreaView>
  )
}