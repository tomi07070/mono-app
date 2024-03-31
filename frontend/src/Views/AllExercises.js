import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import tw from 'twrnc'

export default function AllExercises({navigation}) {
    return(
        <View>
            <ScrollView style={tw`mt-50px`}>
                <TouchableOpacity
                onPress={()=> navigation.navigate('ABS')} 
                >
                   <Text>Abs</Text> 
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}