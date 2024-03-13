import React from "react";
import { Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'

export default function RoutinePage({navigation}) {
    return (
        <>
            <Text>Your Routine</Text>
            <View>
                <FontAwesome.Button style={tw``} 
                    name='plus' 
                    backgroundColor={'white'} 
                    color={'orange'} 
                    iconStyle={tw`text-4xl`} 
                    onPress={() => navigation.navigate('Select Muscle')} 
                />
            </View>
        </>
    )
}