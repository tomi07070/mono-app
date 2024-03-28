import React, {useState} from "react";
import { View, ScrollView } from "react-native";
import AllExercisesCard from "../components/AllExercisesCard";
import AllExercisesNames from "../components/exercisesNames/AllExercisesNames";

export default function AllExercises() {

    const [searchTerm, setSearchTerm] = useState("");


    const allExercises = AllExercisesNames.flat();

    const filteredExercises = allExercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <View>
            <ScrollView>
            {filteredExercises.map((exercise, index) => (
                <AllExercisesCard
                key={index}
                ExerciseName={exercise.name}
                ImageUrl={exercise.image}
                />
            ))}
            </ScrollView>
        </View>
    )
}