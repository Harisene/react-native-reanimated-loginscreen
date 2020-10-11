//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
// create a component
const InputContainer = () => {
  return (
    <View style={[styles.container, { transform: [{ translateY: -40 }] }]}>
      <View
        style={{
          backgroundColor: '#D6E8FC',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 40,
          paddingHorizontal: 20,
        }}
      >
        <Feather name="mail" color="black" size={25} />
        <TextInput placeholder="Email" style={{ marginLeft: 5 }} />
      </View>

      <View
        style={{
          backgroundColor: '#D6E8FC',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 40,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Feather name="lock" color="black" size={25} />
          <TextInput placeholder="Password" style={{ marginLeft: 5 }} />
        </View>

        <Feather name="eye" color="black" size={20} />
      </View>

      <View
        style={{
          backgroundColor: '#D6E8FC',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 40,
          paddingHorizontal: 20,          
             
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Feather name="lock" color="black" size={25} />
          <TextInput placeholder="Confirm Password" style={{ marginLeft: 5 }} />
        </View>
        <Feather name="eye" color="black" size={20} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 140,
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default InputContainer;
