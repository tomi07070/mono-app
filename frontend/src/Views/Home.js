import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
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

    const handleLongPress = (id) => {
        setButtonStates(prevStates =>
            prevStates.map(buttonState =>
                buttonState.id === id ? { ...buttonState, show: false } : buttonState
            )
        );
    };

    return (
        <View style={tw`flex-1`}>
            <View style={tw`p-4 mt-[20px]`}>
                {buttonStates.map(buttonState =>
                    buttonState.show && (
                        <TouchableOpacity
                            key={buttonState.id}
                            style={[styles.button, tw`bg-orange-500`]}
                            onPress={() => navigation.navigate('Routine Page')}
                            onLongPress={() => handleLongPress(buttonState.id)}
                        >
                            <Text style={tw`text-white text-xl`}>
                                {buttonState.day}
                            </Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
            <View style={styles.fabContainer}>
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => navigation.navigate('Add Day')}
                >
                    <FontAwesome name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
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
        elevation: 8, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
