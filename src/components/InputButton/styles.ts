import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { normalize } from '../../types/normalilze';


export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${normalize(48)}px;
  border-radius: ${normalize(8)}px;
  padding: 0 ${normalize(12)}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  margin-bottom: ${normalize(10)}px;
  margin-top: ${normalize(6)}px;
  border: 1px solid;
  position: relative;
`;

export const TextInputStyled =  styled(View)`
  flex: 1;
  width: 100%;
  height: ${normalize(44)}px;
  color: ${({ theme }) => theme.colors.primary_black};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  padding-top:${normalize(12)}px;
  z-index: 1;
`;

export const IconStyledRelative = styled(Icon).attrs(({ theme }) => ({ color: theme.colors.gray05 }))``;

export const TouchableOpacityStyled = styled.TouchableOpacity`
  position: absolute;
  right: ${normalize(6)}px;
  top: ${normalize(44 / 4)}px;
`;
