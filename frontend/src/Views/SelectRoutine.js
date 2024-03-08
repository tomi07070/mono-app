import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'
import FrontBody from '../components/SelectMuscle/FrontBody.js'
import BackBody from '../components/SelectMuscle/BackBody.js';

export default function SelectMuscle({navigation}) {
    const [showFrontBody, setShowFrontBody] = React.useState(true);

    const HandleChange = () => {
        setShowFrontBody(!showFrontBody);
    }

    return (
    <View style={styles.container}>
        <View style={tw`absolute top-[80px] left-[20px]`}>
            <FontAwesome.Button style={tw``} name='repeat' backgroundColor={'white'} color={'orange'} iconStyle={tw`text-4xl`} onPress={HandleChange}/>
        </View>
        {showFrontBody ? <FrontBody navigation={navigation}/> : <BackBody navigation={navigation}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
