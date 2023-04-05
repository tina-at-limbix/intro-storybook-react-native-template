import React from 'react';
import {
  StyleProp, StyleSheet, View, ViewStyle,
} from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  animation_container: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export type Props = LottieView['props'] & {
  animationContainerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  lottieRef?: React.Ref<LottieView>;
}

export default ({
  style, children, contentContainerStyle, animationContainerStyle, lottieRef, ...lottieProps
}: Props): React.ReactElement => (
  <View style={[styles.container, style]}>
    <View style={contentContainerStyle}>
      { children }
    </View>
    <LottieView
      ref={lottieRef}
      style={[styles.animation_container, animationContainerStyle]}
      {...lottieProps}
    />
  </View>
);
