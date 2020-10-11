//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ButtonContainer = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 1,
          height: 50,
          width: '70%',
          backgroundColor: '#74B5FF',
          elevation: 5,
          borderRadius: 40,
          
        }}
      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          LOGIN
        </Text>
      </View>

      <View
        style={{
          marginTop: 5,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 1,
          height: 50,
          width: '70%',
          backgroundColor: '#6070FF',
          elevation: 5,
          borderRadius: 40,
          //position:'absolute',        
        }}
      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          SIGNUP
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    height: 50,
    width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'green'
  },
});

//make this component available to the app
export default ButtonContainer;
