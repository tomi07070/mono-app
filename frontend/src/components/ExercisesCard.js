import React from "react";
import { View, Text, Image } from "react-native";
import tw from 'twrnc';

export default function AllExercisesCard({ ExerciseName, ImageUrl }) {
    return (
        <View style={tw`flex flex-row bg-white rounded-lg overflow-hidden shadow-md mt-[10px] w-full items-center`}>
            <Image 
                style={tw`w-1/4 h-[100px]`}
                source={{ uri: ImageUrl }} 
                resizeMode="cover"
                loadingIndicatorSource={require('../../assets/img/loading.gif')}
            />
            <View style={tw`p-4 flex-1`}>
                <Text style={tw`text-lg font-bold mb-2`}>{ExerciseName}</Text>  
            </View>
        </View>
    )
}
