import * as React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native';

export default function FrontBody() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/hombreFrente.png')}/>
      <View style={tw`absolute top-[240px] left-[-40px]`}>
        <Button title='HOMBRO' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[290px] left-[-20px]`}>
        <Button title='BICEP' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[350px] left-[-60px]`}>
        <Button title='ANTEBRAZO' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[200px] left-[190px]`}>
        <Button title='PECHO' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[440px] left-[-60px]`}>
        <Button title='CUADRICEPS' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[325px] left-[200px]`}>
        <Button title='ABDOMINALES' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[525px] left-[200px]`}>
        <Button title='SOLEO' color={'#FF8000'}/>
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
