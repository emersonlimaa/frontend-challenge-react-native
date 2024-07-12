import { normalize } from '../../types/normalilze';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding: ${normalize(32)}px ${normalize(24)}px;
  border-radius: 16px;
`;

