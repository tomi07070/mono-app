import React from "react";
import { View, Image, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import tw from 'twrnc';

export default function ExerciseCard({ ExerciseName, ImageUrl }) {
    return (
        <View style={tw`bg-white rounded-lg overflow-hidden shadow-md mt-[10px]`}>
            <Image 
                style={tw`w-full h-70`}
                source={{ uri: ImageUrl }} 
                resizeMode="cover"
            />
            <View style={tw`p-4`}>
                <Text style={tw`text-lg font-bold mb-2`}>{ExerciseName}</Text>
                <FontAwesome.Button 
                    name="plus"
                    backgroundColor={'white'} 
                    color={'orange'} 
                    iconStyle={tw`text-4xl`} 
                />
            </View>
        </View>
    )
}
