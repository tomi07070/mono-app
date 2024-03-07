import * as React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import tw from 'twrnc'


export default function BackBody() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/hombreEspalda.png')}/>
      <View style={tw`absolute top-[290px] left-[-60px]`}>
        <Button title='TRICEPS' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[270px] left-[180px]`}>
        <Button title='ESPALDA' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[435px] left-[-50px]`}>
        <Button title='FEMORAL' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[370px] left-[180px]`}>
        <Button title='GLUTEO' color={'#FF8000'}/>
      </View>
      <View style={tw`absolute top-[530px] left-[180px]`}>
        <Button title='GEMELO' color={'#FF8000'}/>
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