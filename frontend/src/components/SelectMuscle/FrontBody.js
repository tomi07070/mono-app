import * as React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import tw from 'twrnc'


export default function FrontBody({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/hombreFrente.png')}/>
      <View style={tw`absolute top-[270px] left-[-40px]`}>
        <Button title='HOMBRO' color={'#FF8000'} onPress={() => navigation.navigate('HOMBRO')}/>
      </View>
      <View style={tw`absolute top-[330px] left-[-20px]`}>
        <Button title='BICEP' color={'#FF8000'} onPress={() => navigation.navigate('BICEPS')}/>
      </View>
      <View style={tw`absolute top-[390px] left-[-60px]`}>
        <Button title='ANTEBRAZO' color={'#FF8000'} onPress={() => navigation.navigate('ANTE BRAZO')}/>
      </View>
      <View style={tw`absolute top-[250px] left-[200px]`}>
        <Button title='PECHO' color={'#FF8000'} onPress={() => navigation.navigate('PECHO')}/>
      </View>
      <View style={tw`absolute top-[480px] left-[-60px]`}>
        <Button title='CUADRICEPS' color={'#FF8000'} onPress={() => navigation.navigate('CUADRICEPS')}/>
      </View>
      <View style={tw`absolute top-[355px] left-[200px]`}>
        <Button title='ABDOMINALES' color={'#FF8000'} onPress={() => navigation.navigate('ABS')}/>
      </View>
      <View style={tw`absolute top-[565px] left-[200px]`}>
        <Button title='SOLEO' color={'#FF8000'} onPress={() => navigation.navigate('SOLEO')}/>
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
