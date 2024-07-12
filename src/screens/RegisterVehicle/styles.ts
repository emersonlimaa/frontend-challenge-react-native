import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { normalize } from '../../types/normalilze';

export const Content = styled.View`
  padding:  ${({theme}) => theme.fontSizes.XS}px;
`;

export const Text = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.SMS}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
`
export const TextDate = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.SM}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
  margin: auto;
`
export const TextError = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.XS}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_red};
`
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary_blue};
  width: ${normalize(40)}px;
  height: ${normalize(40)}px;
  border-radius: ${normalize(20)}px;
  margin-right: ${({theme}) => theme.fontSizes.MD}px;
`;

export const IconStyled = styled(Icon)`
`;
export const ButtonDate = styled.TouchableOpacity`
  height:  ${normalize(48)}px;
  border-radius: ${normalize(20)}px;
  width: 100%;
  flex-wrap: wrap;
  border-radius: ${normalize(8)}px;
  padding: 0 ${normalize(12)}px;
  margin-bottom: ${normalize(8)}px;
  margin-top: ${normalize(6)}px;
  border: 1px solid ${({theme}) => theme.colors.gray05};
  position: relative;
  z-index: 1;
  justify-content: flex-start;
  align-items: center;
`
export const ButtonHour = styled.TextInput`
  height:  ${normalize(56)}px;
  border-radius: ${normalize(20)}px;
  width: ${normalize(200)}px;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: ${normalize(24)}px;;
  border-radius: ${normalize(8)}px;
  padding: 0 ${normalize(12)}px;
  margin-bottom: ${normalize(8)}px;
  margin-top: ${normalize(6)}px;
  border: 1px solid ${({theme}) => theme.colors.gray05};
  position: relative;
  z-index: 1;
  text-align: center;
`
export const ButtonStep = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.gray05};
  height: ${normalize(44)}px;
  border-radius: ${normalize(12)}px;
  margin-right: ${({theme}) => theme.fontSizes.MD}px;
  width: 100%;
  border-width: ${normalize(4)}px;
  border-color: ${({theme}) => theme.colors.gray07};
`;

export const TextButtonStep = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.SM}px;
  font-family: ${({theme}) => theme.fonts.MEDIUM};
  color: ${({theme}) => theme.colors.primary_black};
  text-align: center;
`

export const LineLabel = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: ${normalize(8)}px;
`;

