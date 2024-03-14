import React from "react";
import { View, Image, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'

export default function ExerciseCard() {
    return (
        <View>
            <Image/>
            <Text></Text>
            <FontAwesome.Button 
                    name="check-square-o"
                    backgroundColor={'white'} 
                    color={'orange'} 
                    iconStyle={tw`text-4xl`} 
                />
        </View>
    )
}