import React from "react";
import {
  ActivityIndicator,
  Modal as ModalNative,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useTheme } from "styled-components";

import { normalize } from "../../types/normalilze";

import { Button } from "../Button";
import { Label } from "../Label/variants";
import { Container } from "./styles";
import { MMKVService, MMKVServiceVehicles } from "../../config/mmkvStorage";

interface IModalText {
  onChangeVisible: () => void;
  transparent: boolean;
  modalIsVisible: boolean;
  message: string;
  loading: boolean;
  buttonText?: string;
  options?: Array<{ key: string; name: string }>;
  setState?: React.Dispatch<
    React.SetStateAction<{
      key: string;
      name: string;
    }>
  >;
}

export default function ModalOptions({
  onChangeVisible,
  transparent,
  modalIsVisible,
  message,
  loading,
  buttonText,
  options,
  setState,
}: IModalText) {
  const theme = useTheme();
  const vehicles = MMKVServiceVehicles.list();
  const drivers = MMKVService.list();
  const vehicleAttached = drivers.map((it) => it.vehicle.key);
  const handleClose = async () => {
    onChangeVisible();
  };

  return (
    <ModalNative
      animationType="fade"
      transparent={transparent}
      visible={modalIsVisible}
      onRequestClose={onChangeVisible}
    >
      <View
        style={{
          backgroundColor: "#0008",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            flexBasis: "40%",
            alignItems: "center",
          }}
          onPress={async () => await handleClose()}
        ></TouchableOpacity>
        <View
          style={{
            flexBasis: "60%",
            width: "100%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            height: loading ? 200 : 450,
            borderRadius: normalize(8),
          }}
        >
          <Container>
            {loading ? (
              <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
              >
                <ActivityIndicator
                  size="large"
                  color={theme.colors.primary_black}
                />
                <Label
                  isBold
                  lineHeight={19}
                  fontSize={13}
                  textAlign={"center"}
                  style={{ marginTop: 32 }}
                >
                  Carregando...
                </Label>
              </ScrollView>
            ) : (
              <View style={{ flex: 1 }}>
                <Label
                  isMedium
                  lineHeight={21}
                  fontSize={16}
                  textAlign={"left"}
                  style={{ marginBottom: 32 }}
                >
                  {message}
                </Label>
                <FlatList
                  style={{ flex: 1 }}
                  data={options}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => {
                    const isAttached = vehicleAttached.includes(item.key);

                    return (
                      <TouchableOpacity
                        key={item.key}
                        disabled={isAttached}
                        style={{
                          opacity: isAttached ? 0.5 : 1,
                          marginBottom: 8,
                          borderColor: theme.colors.primary_black,
                          borderWidth: 1,
                          paddingVertical: 8,
                          borderRadius: normalize(8),
                        }}
                        onPress={() => {
                          if (!isAttached && setState) {
                            setState(item);
                          }
                          handleClose();
                        }}
                      >
                        <Label color={theme.colors.primary_black} fontSize={15}>
                          {item.name}
                        </Label>
                      </TouchableOpacity>
                    );
                  }}
                />

                <Button text={buttonText ?? "Ok"} onPress={onChangeVisible} />
              </View>
            )}
          </Container>
        </View>
      </View>
    </ModalNative>
  );
}
