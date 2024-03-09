import React from "react";
import { Button, View } from "react-native";
import tw from 'twrnc'


export default function Home({navigation}) {
    return (
        <>
        <View style={tw`mt-[100px]`}>
            <Button title="Lunes" onPress={()=> navigation.navigate('Select Muscle')}/>
            <Button title="Martes" onPress={()=> navigation.navigate('Select Muscle')}/>
            <Button title="Miercoles" onPress={()=> navigation.navigate('Select Muscle')}/>
            <Button title="Jueves" onPress={()=> navigation.navigate('Select Muscle')}/>
            <Button title="Viernes" onPress={()=> navigation.navigate('Select Muscle')}/>
        </View>
        </>
    )
}