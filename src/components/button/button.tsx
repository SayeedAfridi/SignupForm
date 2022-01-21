import { useTheme } from '@src/hooks';
import { makeStyles } from '@src/theme/theme.utils';
import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Text from '../Text';

export interface ButtonProps extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'default';
}

const useStyle = makeStyles((theme) => ({
  root: {
    paddingVertical: theme.spacing.s + 4,
    paddingHorizontal: theme.spacing.l + 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadii.xl,
  },
}));

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  disabled,
  onPress,
  variant,
  ...rest
}) => {
  const styles = useStyle();
  const theme = useTheme();

  const handlePress = (e: GestureResponderEvent) => {
    if (disabled) {
      return;
    }
    if (onPress) {
      onPress(e);
    }
  };

  const opacity = disabled ? 0.8 : 1;
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'secondary'
      ? theme.colors.secondary
      : theme.colors.grey;
  const color =
    variant === 'primary'
      ? theme.colors.black
      : variant === 'secondary'
      ? theme.colors.white
      : theme.colors.black;
  return (
    <Pressable
      style={[styles.root, style, { opacity, backgroundColor }]}
      onPress={handlePress}
      {...rest}
    >
      <Text variant='button' style={{ color }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
