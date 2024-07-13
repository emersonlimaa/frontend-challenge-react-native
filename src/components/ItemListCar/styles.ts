import styled from 'styled-components/native';
import { normalize } from '../../types/normalilze';

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ContentAttached = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
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

export const Attached = styled.Text`
font-size: ${({theme}) => theme.fontSizes.XS}px;
font-family: ${({theme}) => theme.fonts.SEMI_BOLD};
color: ${({theme}) => theme.colors.primary_black};
text-align: center;
`

export const DescriptionView = styled.View`
  margin-left: ${normalize(12)}px;
  align-items: flex-start;
  flex-direction: column;
`;
export const Checkbox = styled.TouchableOpacity`
`;