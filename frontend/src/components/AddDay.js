import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc';

export default function AddDay({ navigation }) {
    return (
        <View style={tw`flex-1 mt-[50px] items-center p-4 bg-gray-100`}>
            <TouchableOpacity style={tw`w-full max-w-[90%] bg-white rounded-lg shadow-md p-5`}
                onPress={() => navigation.navigate('Plan Screen')}>
                
                <Text style={tw`text-lg font-bold text-gray-800`}>Create Your Own Routine</Text>
                <Text style={tw`text-sm text-gray-600 mt-2`}>Tap to start planning your days and activities.</Text>
                
                <View>
                    <Image 
                    style={tw`ml-[170px] w-[100px] h-[100px]`}
                    source={require('../../assets/img/orangeDumbbell.jpg')}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}