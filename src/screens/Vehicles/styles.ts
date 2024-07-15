import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { normalize } from '../../types/normalilze';
import { css } from 'styled-components';

export const Content = styled.View`
  padding:  ${({theme}) => theme.fontSizes.XS}px;
`;
export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const HeaderItem = styled.View<{width}>`
  ${({ width }) => css`
    padding: ${({theme}) => theme.fontSizes.MD}px;
    height: 60;
    width: ${width}%;
  `}
`;
export const Text = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.SMS}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
`
export const ButtonView = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;
export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.white};
    width: 50%;
    height: ${normalize(40)}px;
`;

