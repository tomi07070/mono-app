import { View, TextInput, ScrollView } from "react-native"
import React, {useState} from "react"
import ExerciseCard from "../../components/ExerciseCard";
import exercises3 from "../../components/exercisesNames/BicepExercises";
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons';

export default function BICEPS() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExercises = exercises3.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <View style={tw`mt-[20px]`}>
            <View style={tw`flex items-end mr-[30px]`}>
                <FontAwesome name="search" size={24} color="white" style={tw`absolute z-1 top-[17px]`}/>
            </View>
            <TextInput
                style={tw`bg-orange-400 rounded-full text-white h-[50px] m-2 p-3 text-xl`}
                onChangeText={text => setSearchTerm(text)}
                value={searchTerm}
                placeholder="Search"
                placeholderTextColor="white"
            />
        <ScrollView style={tw`mt-[20px] mb-[60px]`}>
            {filteredExercises.map((exercise, index) => (
            <ExerciseCard
                key={index}
                ExerciseName={exercise.name}
                ImageUrl={exercise.image}
                />
        ))}
        </ScrollView>
        </View>
    )
}