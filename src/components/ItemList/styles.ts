import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import IconFeather from '@expo/vector-icons/Feather'

import { normalize } from '../../types/normalilze';

export const ContainerOptions = styled.View`
  margin-top: 24px;
  border: 1px solid gray;
  padding: ${normalize(12)}px;
  border-radius:  ${normalize(8)}px;
`;

export const LineSpace = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({theme}) => theme.fontSizes.XS}px;
  
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary_blue};
  width: ${normalize(40)}px;
  height: ${normalize(40)}px;
  border-radius: ${normalize(20)}px;
  margin-right: ${({theme}) => theme.fontSizes.MD}px;
`

export const Text = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.XXXS}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
`
export const TextEmpty = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.MD}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
  text-align: center;
  margin-top:  ${normalize(20)}px;
`
export const TextDate = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.XS}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
`
export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.SM}px;
  font-family: ${({theme}) => theme.fonts.SEMI_BOLD};
  color: ${({theme}) => theme.colors.primary_black};
  width: 100%;
`

export const IconStyled = styled(Icon)`
margin-right: 8px;
`;
export const IconFeatherStyled = styled(IconFeather)`
margin-right: 8px;
`;
export const Line = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Separator = styled.View`
  width: 100%;
  margin: ${({theme}) => theme.fontSizes.SM}px 0;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray05};
`;
 
export const Description = styled.Text`
font-size: ${({theme}) => theme.fontSizes.XS}px;
font-family: ${({theme}) => theme.fonts.SEMI_BOLD};
color: ${({theme}) => theme.colors.primary_black};
`
 
export const DescriptionDate = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.XXS}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.gray03};
  width: 100%;
  margin-top: 4px;
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
  margin-top: 24px;
`;

export const TextButtonStep = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.SM}px;
  font-family: ${({theme}) => theme.fonts.MEDIUM};
  color: ${({theme}) => theme.colors.primary_black};
  text-align: center;
`


export const StatusCard = styled.View<{status: 'edit' | 'sync' | 'ok' | undefined}>`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({theme, status}) => status === 'edit' || status === undefined ? theme.colors.gold_yellow : status === 'sync' ? theme.colors.pink : theme.colors.success };
`