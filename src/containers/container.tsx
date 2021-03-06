import { makeStyles } from '@src/theme/theme.utils';
import React from 'react';
import { ImageBackground, View, ViewProps, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { transparentize } from 'polished';
import { screenHeight, screenWidth } from '@src/utils';
export interface ContainerProps extends ViewProps {
  children: React.ReactNode | React.ReactNode[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  safeView: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: screenWidth,
    height: screenHeight + 100,
    backgroundColor: transparentize(0.05, theme.colors.background),
  },
}));

const Container: React.FC<ContainerProps> = ({ children, style, ...rest }) => {
  const styles = useStyles();
  return (
    <View style={[styles.root, style]} {...rest}>
      <ImageBackground
        source={require('@src/assets/bg.jpg')}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeView}>{children}</SafeAreaView>
    </View>
  );
};

export default Container;
