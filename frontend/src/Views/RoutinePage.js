import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'

export default function RoutinePage({navigation}) {
    return (
        <>
            <Text>Your Routine</Text>
            <View style={styles.fabContainer}>
                <TouchableOpacity
                    style={styles.fab}
                    onPress={()=> navigation.navigate("Select Muscle")}
                >
                    <FontAwesome name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
