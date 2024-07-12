import React, { useState } from "react";
import { TextInputProps, View } from "react-native";

import { useTheme } from "styled-components/native";

import { normalize } from "../../types/normalilze";

import { Text } from "../Label/styles";
import { Label } from "../Label/variants";
import {
  Container,
  TextInputStyled,
  IconStyled,
  TouchableOpacityStyled,
  IconStyledRelative,
  IconPasswordStyled,
} from "./styles";

interface Props extends TextInputProps {
  hasValidation?: boolean;
  error?: boolean;
  value?: string;
  password?: boolean;
  noEditable?: boolean;
  label?: string;
  isMedium?: boolean;
  required?: boolean;
  hasInfo?: boolean;
  setMessageInfo?: React.Dispatch<React.SetStateAction<string>>;
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  textInfo?: string;
  isDescription?: boolean;
}

export const Input = ({
  password,
  hasValidation,
  error,
  value,
  noEditable,
  label,
  onFocus,
  isMedium = false,
  required = false,
  hasInfo = false,
  setMessageInfo,
  setModalVisible,
  textInfo = "",
  isDescription = false,
  ...rest
}: Props) => {
  const [showPass, setShowPass] = useState(!!password);
  const [focused, setFocused] = useState(false);

  const theme = useTheme();

  return (
    <Container
      isMedium={isMedium}
      isDescription={isDescription}
      style={{
        backgroundColor: !noEditable ? theme.colors.white : theme.colors.gray02,
        borderColor: theme.colors.gray05,
      }}
    >
      {label && (
        <View
          style={{
            position: "absolute",
            top: -normalize(8),
            left: normalize(4),
            paddingLeft: normalize(4),
            paddingRight: normalize(4),
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            width: "106%",
            zIndex: 1000,
          }}
        >
          <Label
            lineHeight={16}
            color={theme.colors.primary_blue}
            fontSize={10}
            style={[
              {
                flexWrap: "nowrap",
                backgroundColor: !noEditable
                  ? theme.colors.white
                  : theme.colors.primary_blue,
                paddingLeft: normalize(4),
                paddingRight: required && !noEditable ? 0 : normalize(4),
                zIndex: 4,
              },
              noEditable && {
                marginTop: normalize(6),
              },
            ]}
          >
            {label}
          </Label>
          {required && !noEditable && (
            <Label
              lineHeight={18}
              color={theme.colors.alert}
              fontSize={14}
              style={[
                {
                  flexWrap: "nowrap",
                  backgroundColor: !noEditable
                    ? theme.colors.white
                    : theme.colors.primary_blue,
                  paddingRight: normalize(4),
                },
              ]}
            >
              *
            </Label>
          )}
        </View>
      )}
      <TextInputStyled
        {...rest}
        value={value}
        secureTextEntry={!!showPass}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        maxLength={isDescription ? 255 : 5000}
        multiline={isDescription}
        focused={focused || value?.length}
      />

      {hasValidation && error && !password ? (
        <>
          <IconStyled
            type="error"
            name="close-circle"
            size={normalize(20)}
            testID="input-error"
          />
          <Label
            lineHeight={14}
            color={theme.colors.primary_red}
            fontSize={12}
            style={{
              position: "absolute",
              top: -normalize(18),
              right: 0,
            }}
          >
            Campo obrigatório
          </Label>
        </>
      ) : null}
      {hasValidation && error && password ? (
        <IconPasswordStyled
          type="error"
          name="close-circle"
          size={normalize(20)}
          testID="input-error-password"
        />
      ) : null}
      {/* {hasValidation && !error && value && !password ? (
        <IconStyled name="check-circle" type="success" size={normalize(20)} />
      ) : null} */}
      {password ? (
        <TouchableOpacityStyled onPress={() => setShowPass(!showPass)}>
          <IconStyledRelative
            name={showPass ? "eye" : "eye-off"}
            size={normalize(20)}
          />
        </TouchableOpacityStyled>
      ) : null}
      {isDescription ? (
        <Text
          style={{
            position: "absolute",
            bottom: -20,
            right: 0,
            color: theme.colors.gray04,
          }}
        >
          {value?.length}/255
        </Text>
      ) : null}
    </Container>
  );
};
