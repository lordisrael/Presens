import React, { useCallback } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Device } from "react-native-ble-plx";
import { COLORS } from "../constants/Colors";

const DeviceModalListItem = (props) => {
  const { item, connectToPeripheral, closeModal } = props;

  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);

  return (
    <TouchableOpacity
      onPress={connectAndCloseModal}
      style={{backgroundColor:COLORS.darkQoutes, justifyContent:'center', alignItems:'center', height:50, marginHorizontal:20, marginBottom:6, borderRadius:8
      }}
    >
      <Text style={{fontFamily:"Poppins-Regular", color:COLORS.white, fontSize:18}}>{item.item.name}</Text>
    </TouchableOpacity>
  );
};

const DeviceModal = (props) => {
    const { devices, visible, connectToPeripheral, closeModal } = props;
    const renderDeviceModalListItem = useCallback(
      (item) => {
        return (
          <DeviceModalListItem
            item={item}
            connectToPeripheral={connectToPeripheral}
            closeModal={closeModal}
          />
        );
      },
      [closeModal, connectToPeripheral]
    );
    return (
      <Modal
        style={modalStyle.modalContainer}
        animationType="slide"
        transparent={false}
        visible={visible}
      >
        <SafeAreaView style={modalStyle.modalTitle}>
          <Text style={modalStyle.modalTitleText}>
            Tap on a device to connect
          </Text>
          <FlatList
            contentContainerStyle={modalStyle.modalFlatlistContiner}
            data={devices}
            renderItem={renderDeviceModalListItem}
          />
        </SafeAreaView>
      </Modal>
    );
}

const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.lightwhite,
  },
  modalFlatlistContiner: {
    flex: 1,
    justifyContent: "center",
  },
  modalCellOutline: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  modalTitle: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalTitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
  },
});

export default DeviceModal;
