import * as React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import tw from 'twrnc'


export default function BackBody({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/hombreEspalda.png')}/>
      <View style={tw`absolute top-[260px] left-[-60px]`}>
        <Button title='TRICEPS' color={'#FF8000'} onPress={() => navigation.navigate('TRICEPS') }/>
      </View>
      <View style={tw`absolute top-[240px] left-[190px]`}>
        <Button title='ESPALDA' color={'#FF8000'} onPress={() => navigation.navigate('ESPALDA')}/>
      </View>
      <View style={tw`absolute top-[415px] left-[-50px]`}>
        <Button title='FEMORAL' color={'#FF8000'} onPress={() => navigation.navigate('FEMORALES')}/>
      </View>
      <View style={tw`absolute top-[340px] left-[190px]`}>
        <Button title='GLUTEO' color={'#FF8000'} onPress={() => navigation.navigate('GLUTEO')}/>
      </View>
      <View style={tw`absolute top-[510px] left-[180px]`}>
        <Button title='GEMELO' color={'#FF8000'} onPress={() => navigation.navigate('GEMELO')}/>
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