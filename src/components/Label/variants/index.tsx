import styled, { css } from "styled-components/native";

import { normalize } from "../../../types/normalilze";

export const Label = styled.Text<{
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  textAlign?: "center" | "justify" | "right" | "left";
  isBold?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
  marginTop?: number;
  isSmiBold?: boolean;
}>`
  font-size: ${({ fontSize }) => normalize(fontSize ?? 12)}px;
  color: ${({ theme, color }) => color ?? theme.colors.primary_black};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${normalize(lineHeight)}px;
    `}

  ${({ isBold }) =>
    isBold &&
    css`
      font-family: ${({ theme }) => theme.fonts.BOLD};
    `}
    
  ${({ isMedium }) =>
    isMedium &&
    css`
      font-family: ${({ theme }) => theme.fonts.MEDIUM};
    `}
    ${({ isSmiBold }) =>
    isSmiBold &&
    css`
      font-family: ${({ theme }) => theme.fonts.SEMI_BOLD};
    `}
    
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${normalize(marginTop)}px;
    `}
`;
