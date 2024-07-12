import styled, {css} from 'styled-components/native'
import { Dimensions, TouchableOpacity } from 'react-native';
import { normalize } from '../../types/normalilze';

interface IButtonProps {
  maxWidth?: number
  maxHeight?: number
  color?: string
  border?: string
  hasNoSpace?: boolean
  isOpen?: boolean
}

export const Container = styled(TouchableOpacity)<IButtonProps>`
  border-radius: ${normalize(6)}px;
  height: ${normalize(34)}px;
  background-color: ${({theme, color}) => color ?? theme.colors.primary_blue};
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({maxWidth}) => maxWidth && css`
      width: ${normalize(maxWidth)}px;
    `}
  ${({maxHeight}) => maxHeight && css`
    height: ${normalize(maxHeight)}px;
  `}
  ${({border, theme, hasNoSpace}) => !hasNoSpace && border && css`
    border: 2px solid ${border};
  `}
  ${({isOpen, hasNoSpace}) =>!hasNoSpace && isOpen && css`
    width: ${Dimensions.get('window').width}px;
    margin-left: ${normalize(48)}px;
    border-radius: 0;
  `}
`;

export const IconButton = styled.View`

`

export const TextButton = styled.Text<{color?: string}>`
  color: ${({theme, color}) => color ?? theme.colors.white};
  font-size: ${normalize(14)}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
`;


export const ContentButton = styled.View`
  flex-direction: row;
`;
