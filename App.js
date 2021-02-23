import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ButtonComponent from './ButtonComponent';

export default function App() {

  const peoples = [
    'Gizem',
    'Ayşenur',
    'Fatma',
  ];





  return (
    <View style={styles.container}>
      <FlatList data={peoples}
        renderItem={({ item, index }) =>
          <ButtonComponent item={item} color="green" />} />

      <ButtonComponent item={"Not Ver"} color="purple" />
      <ButtonComponent item={"Not Al"} color="orange" />
      <ButtonComponent item={"Not Al"} color="pink" />
      <ButtonComponent item={"Not Al"} color="azure" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
