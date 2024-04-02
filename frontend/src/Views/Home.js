import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal, Button, TextInput } from "react-native";
import tw from 'twrnc';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home({ navigation }) {
  const [buttonStates, setButtonStates] = useState([
    { id: 1, show: true, day: "Monday" },
    { id: 2, show: true, day: "Tuesday" },
    { id: 3, show: true, day: "Wednesday" },
    { id: 4, show: true, day: "Thursday" },
    { id: 5, show: true, day: "Friday" },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newDay, setNewDay] = useState("");

  const handleLongPress = (id) => {
    setButtonStates((prevStates) =>
      prevStates.map((buttonState) =>
        buttonState.id === id ? { ...buttonState, show: false } : buttonState
      )
    );
  };

  const addDay = () => {

    const newId = buttonStates.length > 0 ? buttonStates[buttonStates.length - 1].id + 1 : 1;
    const newDayToAdd = { id: newId, show: true, day: newDay };
    setButtonStates((prevState) => [...prevState, newDayToAdd]);
    setIsModalVisible(false);
    setNewDay("");
    
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`p-4 mt-[20px]`}>
        {buttonStates.map((buttonState) =>
          buttonState.show && (
            <TouchableOpacity
              key={buttonState.id}
              style={[styles.button, tw`bg-orange-500`]}
              onPress={() => navigation.navigate("Routine Page")}
              onLongPress={() => handleLongPress(buttonState.id)}
            >
              <Text style={tw`text-white text-xl`}>{buttonState.day}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab} onPress={() => setIsModalVisible(true)}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Enter Day"
              value={newDay}
              onChangeText={setNewDay}
              style={styles.input}
            />
            <FontAwesome
              name="check"
              size={24}
              onPress={addDay}
              color={"orange"}
              style={tw`bg-orange-500 text-white font-bold py-2 px-4 rounded mt-5`}
            />
            <FontAwesome name="close" style={tw`absolute top-2 left-69`} size={35} onPress={() => setIsModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabContainer: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 20,
    fontSize: 16,
    color: 'black'
  },
});
