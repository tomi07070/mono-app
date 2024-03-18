import React from "react";
import { Button, View } from "react-native";
import tw from 'twrnc'


export default function Home({navigation}) {
    return (
        <>
        <View style={tw`mt-[100px]`}>
            <View style={tw`p-4`}>
                <Button title="Monday" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}>
                <Button title="Tuesday" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}>
                <Button title="Wednesday" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}>
                <Button title="Thursday" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}> 
                <Button title="Friday" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
        </View>
        </>
    )
}