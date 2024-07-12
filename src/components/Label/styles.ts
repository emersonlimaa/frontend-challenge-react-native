import { normalize } from '../../types/normalilze';
import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${normalize(13)}px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.colors.primary_black};
`;
