import React from "react";
import { View, ScrollView, Text,  TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'

export default function PreMadeRoutines() {
    return(
        <View>
            <Text>Gain Strenght</Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity><TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity><TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity>
            </ScrollView>
            <Text>Develop Muscle</Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity><TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity><TouchableOpacity>
                    <Image style={tw`w-[350px] h-[150px] m-3`} source={{uri: 'https://www.europeanhealthschool.com/wp-content/uploads/2023/02/powerlifting-disciplina-deportiva.jpg'}}/>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}