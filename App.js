import React  from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Background from './src/Background';
import { FontAwesome } from '@expo/vector-icons';
import InputContainer from './src/InputContainer';
import ButtonContainer from './src/ButtonContainer';
import LogoContainer from './src/LogoContainer';

const { width } = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      <Background />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          Welcome to EduApp
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          opacity: 1,
        }}
      >
        <FontAwesome name="arrow-left" size={20} color="black" />
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: 250,
          paddingHorizontal: 25,
          transform: [{ scale: 1.5 }, { translateY: 40 }],
        }}
      >
        <Image
          source={require('./assets/images/1.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <View style={{ width, alignItems: 'center' }}>
        <InputContainer />
        <ButtonContainer />
        <LogoContainer />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          opacity: 1,
          height: 150,
        }}
      >
        <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
      
          <Text style={{ color: '#6070FF', fontWeight: 'bold', fontSize: 17 }}>
            Signup
          </Text>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
  },
});
