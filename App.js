import React, { useRef } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Background from './src/Background';
import { FontAwesome } from '@expo/vector-icons';
import InputContainer from './src/InputContainer';
import ButtonContainer from './src/ButtonContainer';
import LogoContainer from './src/LogoContainer';
import Animated, {
  cond,
  eq,
  interpolate,
  set,
  useCode,
} from 'react-native-reanimated';
import { withTimingTransition, onGestureEvent } from 'react-native-redash';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
export default function App() {
  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current, { duration: 500 });

  const arrowOpacity = useRef(new Animated.Value(0));
  const arrowOpacityAnimation = withTimingTransition(arrowOpacity.current, {
    duration: 500,
  });

  const signUpGestureHandler = useRef(new Animated.Value(0));
  const onSignUpGestureHandler = onGestureEvent({
    state: signUpGestureHandler.current,
  });

  const backArrowGestureHandler = useRef(new Animated.Value(0));
  const onBackArrowGestureHandler = onGestureEvent({
    state: backArrowGestureHandler.current,
  });

  const accountOpacity = interpolate(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  useCode(() => set(scale.current, 1.5));
  useCode(() =>
    cond(eq(signUpGestureHandler.current, State.END), [
      set(arrowOpacity.current, 1),
      set(scale.current, 1),
    ])
  );
  useCode(() =>
    cond(eq(backArrowGestureHandler.current, State.END), [
      set(arrowOpacity.current, 0),
      set(scale.current, 1.5),
    ])
  );

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
      <PanGestureHandler {...onBackArrowGestureHandler}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            opacity: arrowOpacityAnimation,
          }}
        >
          <FontAwesome name="arrow-left" size={20} color="black" />
        </Animated.View>
      </PanGestureHandler>
      <Animated.View
        style={{
          width: '100%',
          alignItems: 'center',
          height: 250,
          paddingHorizontal: 25,
          transform: [{ scale: scaleAnimation }, { translateY: 40 }],
        }}
      >
        <Image
          source={require('./assets/images/1.png')}
          style={{ width: 150, height: 150 }}
        />
      </Animated.View>

      <View style={{ width, alignItems: 'center' }}>
        <InputContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
        <ButtonContainer arrowOpacityAnimation={arrowOpacityAnimation} />
        <LogoContainer arrowOpacityAnimation={arrowOpacityAnimation} />
      </View>

      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          height: 150,
          opacity: accountOpacity,
        }}
      >
        <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
        <PanGestureHandler {...onSignUpGestureHandler}>
          <Animated.Text
            style={{ color: '#6070FF', fontWeight: 'bold', fontSize: 17 }}
          >
            Signup
          </Animated.Text>
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
