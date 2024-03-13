import React from "react";
import { Button, View } from "react-native";
import tw from 'twrnc'


export default function Home({navigation}) {
    return (
        <>
        <View style={tw`mt-[100px]`}>
            <View style={tw`p-4`}>
                <Button title="Lunes" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}>
                <Button title="Martes" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}>
                <Button title="Miercoles" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}>
                <Button title="Jueves" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
            <View style={tw`p-4`}> 
                <Button title="Viernes" color={'orange'} onPress={()=> navigation.navigate('Routine Page')}/>
            </View>
        </View>
        </>
    )
}