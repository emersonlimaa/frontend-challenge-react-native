import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import { Container, TextButton, ContentButton, IconButton } from './styles';

interface Props extends TouchableOpacityProps {
  text?: string;
  loading?: boolean;
  icon?: JSX.Element;
  maxWidth?: number;
  maxHeight?: number;
  isRight?: boolean;
  color?: string;
  textColor?: string;
  border?: string;
  hasNoSpace?: boolean;
}

export const Button = ({
  text,
  maxWidth,
  isRight,
  icon: IconButtonProp,
  style,
  maxHeight,
  color,
  loading,
  disabled,
  textColor,
  border,
  hasNoSpace = false,
  ...rest
}: Props) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      {...rest}
      style={{ opacity: disabled ? 0.25 : 1 }}
      color={color}
      border={border}
      hasNoSpace={hasNoSpace}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.primary_black} size="small" />
      ) : (
        <ContentButton>
          {isRight ?? !IconButtonProp ? null : <IconButton>{IconButtonProp}</IconButton>}
          <TextButton color={textColor}>{text}</TextButton>
          {isRight && IconButtonProp ? <IconButton>{IconButtonProp}</IconButton> : null}
        </ContentButton>
      )}
    </Container>
  );
};
