import styled  from 'styled-components/native'
import { TextInput } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { normalize } from '../../types/normalilze';

type IconProps = { type: 'error' | 'success' }

export const Container = styled.View<{isMedium?: boolean, isDescription: boolean} >`
  width: ${({isMedium}) => isMedium ? 50 : 100}%;
  align-items: flex-start;
  height: ${({isDescription}) => isDescription ? normalize(96) : normalize(48)}px;
  flex-wrap: wrap;
  border-radius: ${normalize(8)}px;
  padding: 0 ${normalize(12)}px;
  margin-bottom: ${normalize(8)}px;
  margin-top: ${normalize(6)}px;
  border: 1px solid;
  position: relative;
  z-index: 1;
`;

export const TextInputStyled =  styled(TextInput)<{isDescription: boolean}>`
  flex: 1;
  width: 100%;
  align-items: start;
  height: ${({isDescription}) => isDescription ? '100%' : normalize(40)}px;
  color: ${({ theme }) => theme.colors.primary_black};
  font-size: ${normalize(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  z-index: 1;
`;

export const IconStyled = styled(Icon).attrs<IconProps>(({ theme, type }) => 
({ color: type === 'success' ? theme.colors.green : theme.colors.alert }))`
  position: absolute;
  right: ${normalize(6)}px;
  top: ${normalize(48 / 4)}px;
`;

export const IconPasswordStyled = styled(Icon).attrs<IconProps>(({ theme, type }) => 
({ color: type === 'success' ? theme.colors.green : theme.colors.gray05 }))`
  position: absolute;
  right: ${normalize(48)}px;
  top: ${normalize(70 / 4)}px;
`;

export const IconStyledRelative = styled(Icon).attrs(({ theme }) => ({ color: theme.colors.gray05 }))``;

export const TouchableOpacityStyled = styled.TouchableOpacity`
  position: absolute;
  right: ${normalize(16)}px;
  top: ${normalize(70 / 4)}px;
`;

export const MaxLengthText = styled.Text`
  color: ${({theme}) => theme.colors.gray05};
  font-size: ${normalize(10)}px;
  font-family: ${({theme}) => theme.fonts.BOLD};
  position: absolute;
  top: 100%;
  right: 5%
`