import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ item, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.textStyle}>{item}</Text>
    </TouchableOpacity>
  )
};

export default ButtonComponent;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    color: "black",
    margin: 10
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    margin: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3

  },
});