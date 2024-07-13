import React from "react";
import { Modal as ModalNative, View } from "react-native";

import { useTheme } from "styled-components";

import { normalize } from "../../types/normalilze";

import { Label } from "../Label/variants";
import { Container, Button, ButtonView, Line } from "./styles";

interface IModalText {
  onChangeVisible: () => void;
  modalIsVisible: boolean;
  setDelete?: React.Dispatch<React.SetStateAction<void>>;
}

export default function ModalConfirm({
  onChangeVisible,
  modalIsVisible,
  setDelete,
}: IModalText) {
  const theme = useTheme();

  const handleClose = async () => {
    onChangeVisible();
  };

  return (
    <ModalNative
      animationType="fade"
      transparent={true}
      visible={modalIsVisible}
      onRequestClose={onChangeVisible}
    >
      <View
        style={{
          backgroundColor: "#0005",
          flex: 1,
        }}
      >
        <View
          style={{
            width: "90%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            height: 100,
            margin: "auto",
            borderRadius: normalize(8),
          }}
        >
          <Container>
            <View style={{ flex: 1 }}>
              <Label
                isBold
                lineHeight={21}
                fontSize={18}
                textAlign={"center"}
                style={{ marginTop: 18 }}
              >
                Deseja deletar esse item?
              </Label>
            </View>
            <ButtonView>
              <Button onPress={handleClose} isModal={false}>
                <Label isMedium fontSize={16} textAlign={"center"}>
                  cancelar
                </Label>
              </Button>
              <Line />
              <Button
                isModal={false}
                onPress={() => {
                  setDelete();
                  handleClose();
                }}
              >
                <Label isMedium fontSize={16} textAlign={"center"}>
                  deletar
                </Label>
              </Button>
            </ButtonView>
          </Container>
        </View>
      </View>
    </ModalNative>
  );
}
