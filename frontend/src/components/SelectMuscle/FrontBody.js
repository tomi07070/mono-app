import * as React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import tw from 'twrnc'


export default function FrontBody({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/hombreFrente.png')}/>
      <View style={tw`absolute top-[220px] left-[-40px]`}>
        <Button title='HOMBRO' color={'#FF8000'} onPress={() => navigation.navigate('HOMBRO')}/>
      </View>
      <View style={tw`absolute top-[270px] left-[-20px]`}>
        <Button title='BICEP' color={'#FF8000'} onPress={() => navigation.navigate('BICEPS')}/>
      </View>
      <View style={tw`absolute top-[330px] left-[-60px]`}>
        <Button title='ANTEBRAZO' color={'#FF8000'} onPress={() => navigation.navigate('ANTE BRAZO')}/>
      </View>
      <View style={tw`absolute top-[180px] left-[200px]`}>
        <Button title='PECHO' color={'#FF8000'} onPress={() => navigation.navigate('PECHO')}/>
      </View>
      <View style={tw`absolute top-[420px] left-[-60px]`}>
        <Button title='CUADRICEPS' color={'#FF8000'} onPress={() => navigation.navigate('CUADRICEPS')}/>
      </View>
      <View style={tw`absolute top-[300px] left-[200px]`}>
        <Button title='ABDOMINALES' color={'#FF8000'} onPress={() => navigation.navigate('ABS')}/>
      </View>
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
