import React from "react";
import { View, Image, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function ExerciseCard() {
    return (
        <View>
            <Image/>
            <Text></Text>
            <FontAwesome.Button style={tw``} 
                    name='plus' 
                    backgroundColor={'white'} 
                    color={'orange'} 
                    iconStyle={tw`text-4xl`} 
                    onPress={() => navigation.navigate('Select Muscle')} 
                />
                <FontAwesome.Button style={tw``} 
                    name='plus' 
                    backgroundColor={'white'} 
                    color={'orange'} 
                    iconStyle={tw`text-4xl`} 
                    onPress={() => navigation.navigate('Select Muscle')} 
                />
        </View>
    )
}