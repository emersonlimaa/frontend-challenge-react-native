import React, { useState } from "react";
import { TextInputProps, View, TouchableOpacity, Alert } from "react-native";

import { useTheme } from "styled-components/native";

import { normalize } from "../../types/normalilze";

import { IconStyled } from "../Input/styles";
import { Label } from "../Label/variants";
import ModalOptions from "../ModalOptions";
import {
  Container,
  TextInputStyled,
  TouchableOpacityStyled,
  IconStyledRelative,
} from "./styles";

interface Props extends TextInputProps {
  hasValidation?: boolean;
  error?: boolean;
  value?: string;
  password?: boolean;
  noEditable?: boolean;
  label?: string;
  hasUpAndDown?: boolean;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  options?: Array<{ key: string; name: string }>;
  message: string;
  required?: boolean;
  hasInfo?: boolean;
  setMessageInfo?: React.Dispatch<React.SetStateAction<string>>;
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  textInfo?: string;
}

export const InputButton = ({
  password = false,
  hasValidation,
  error,
  value,
  noEditable,
  label,
  onFocus,
  message,
  hasUpAndDown,
  setState,
  options,
  required = false,
  hasInfo = false,
  setMessageInfo,
  setModalVisible,
  textInfo = "",
  ...rest
}: Props) => {
  const [modalVisible, setModalVisibleLocale] = useState(false);
  const theme = useTheme();
  return (
    <Container
      style={{
        backgroundColor: !noEditable ? theme.colors.white : theme.colors.gray05,
        borderColor: theme.colors.gray05,
      }}
      onPress={() => {
        if (noEditable) {
          Alert.alert(
            "Nenhum veículo cadastrado",
            "Para que possa vincular um veículo ao motorista, deve primeiro cadastrar ao menos um veículo."
          );
          return;
        }
        setModalVisibleLocale(true);
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
            zIndex: 2,
          }}
        >
          <Label
            lineHeight={16}
            color={theme.colors.primary_black}
            fontSize={10}
            style={{
              flexWrap: "nowrap",
              backgroundColor: theme.colors.white,
              paddingLeft: normalize(4),
              paddingRight: required ? 0 : normalize(4),
            }}
          >
            {label}
          </Label>
          {required && (
            <Label
              lineHeight={18}
              color={theme.colors.primary_black}
              fontSize={14}
              style={{
                flexWrap: "nowrap",
                backgroundColor: theme.colors.white,
                paddingRight: normalize(4),
              }}
            >
              *
            </Label>
          )}
          {hasInfo && (
            <TouchableOpacity
              style={{
                marginLeft: 0,
                backgroundColor: theme.colors.white,
                paddingRight: normalize(4),
                paddingTop: 2,
              }}
              onPress={() => {
                if (setMessageInfo) setMessageInfo(textInfo);
                if (setModalVisible) setModalVisible(true);
              }}
            >
              <IconStyledRelative name="information" size={normalize(16)} />
            </TouchableOpacity>
          )}
        </View>
      )}
      <TextInputStyled>
        <Label
          fontSize={14}
          color={theme.colors.primary_black}
          textAlign="left"
        >
          {value}
        </Label>
      </TextInputStyled>
      <>
        <Label
          fontSize={14}
          style={{
            position: "absolute",
            top: normalize(14),
            left: 12,
            zIndex: 3,
          }}
          color={value ? theme.colors.primary_black : theme.colors.white}
        >
          {value ? "" : "Selecione"}
        </Label>
        <TouchableOpacityStyled
          style={{ zIndex: 3 }}
          onPress={() => {
            setModalVisibleLocale(true);
          }}
        >
          <IconStyledRelative name="chevron-down" size={normalize(24)} />
        </TouchableOpacityStyled>

        {hasValidation && error && !password ? (
          <>
            <IconStyled
              type="error"
              name="close-circle"
              size={normalize(20)}
              testID="input-error"
              style={{
                right: normalize(32),
              }}
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
      </>
      <ModalOptions
        message={message}
        modalIsVisible={modalVisible}
        onChangeVisible={() => setModalVisibleLocale(false)}
        buttonText="Voltar"
        loading={false}
        transparent
        options={options}
        setState={setState}
      />
    </Container>
  );
};
