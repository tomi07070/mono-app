import React from "react";
import {  TextInput, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'

export default function AddDay({navigation}) {
    return (
        <>
            <View>
                <TextInput
                    placeholder="Name"
                />
                <FontAwesome.Button style={tw``} 
                    name='check' 
                    backgroundColor={'white'} 
                    color={'orange'} 
                    iconStyle={tw`text-4xl`} 
                    onPress={() => navigation.navigate('Select Muscle')} 
                />
            </View>
        </>
    )
}