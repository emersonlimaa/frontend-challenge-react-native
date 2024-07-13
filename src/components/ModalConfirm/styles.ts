import { css } from 'styled-components';
import { normalize } from '../../types/normalilze';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding:  ${normalize(0)}px;
  border-radius: 16px;
`;

export const Button = styled.TouchableOpacity<{isModal}>`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.white};
  width: 50%;
`;
export const ButtonView = styled.View`
  flex-direction: row;
  padding:  ${normalize(4)}px;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.gray05};
`;
export const Line =  styled.View`
  width:${normalize(1)}px;
  height: ${normalize(28)}px;
  background-color:${({theme}) => theme.colors.gray05};
`;