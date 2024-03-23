import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import tw from 'twrnc'
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function Home({navigation}) {
    
    const [buttonStates, setButtonStates] = useState([
        { id: 1, show: true },
        { id: 2, show: true },
        { id: 3, show: true },
        { id: 4, show: true },
        { id: 5, show: true }
    ]);

    const handleLongPress = (id) => {
        setButtonStates(prevStates =>
            prevStates.map(buttonState =>
                buttonState.id === id ? { ...buttonState, show: false } : buttonState
            )
        );
    };

    return (
        <>
        <FontAwesome.Button style={tw`ml-[150px] mt-[50px]`} 
        name='plus' 
        backgroundColor={'white'} 
        color={'orange'} 
        iconStyle={tw`text-8xl`} 
        onPress={()=> navigation.navigate('Add Day')}
        />
        <View style={tw``}>
            {buttonStates.map(buttonState =>
                buttonState.show && (
                    <TouchableOpacity
                        key={buttonState.id}
                        style={tw`p-6 m-2 mt-3 bg-orange-500`}
                        onPress={() => navigation.navigate('Routine Page')}
                        onLongPress={() => handleLongPress(buttonState.id)}
                    >
                        <Text style={tw`text-white text-xl`}>
                            {(() => {
                                switch (buttonState.id) {
                                    case 1: return "Monday";
                                    case 2: return "Tuesday";
                                    case 3: return "Wednesday";
                                    case 4: return "Thursday";
                                    case 5: return "Friday";
                                    default: return "";
                                }
                            })()}
                        </Text>
                    </TouchableOpacity>
                )
            )}
              
        </View>
        </>
    );
}
