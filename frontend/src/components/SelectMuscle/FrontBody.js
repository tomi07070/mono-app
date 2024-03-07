import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function FrontBody() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/hombreFrente.png')}/>
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
