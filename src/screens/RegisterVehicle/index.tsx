import React, { useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";

import { Controller, useForm } from "react-hook-form";
import { schemaVehicle } from "../../schemas/addVehicle.schema";
import { Button } from "../../components/Button";
import { MMKVServiceVehicles } from "../../config/mmkvStorage";
import { useNavigation } from "@react-navigation/native";
import { IFormAddVehicle } from "../../models/Forms";

const RegisterVehicleScreen = (data) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState(data.route.params?.id ?? "");
  const [hasData] = useState(id ? MMKVServiceVehicles.get(id) : undefined);
  const vehicles = MMKVServiceVehicles.list();
  const {
    control,
    formState: { errors },
    trigger,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaVehicle),
    mode: "onBlur",
    defaultValues: {
      model: hasData?.model ?? "",
      licensePlate: hasData?.licensePlate ?? "",
    },
  });

  const navigation = useNavigation();
  const onSubmit = async (data: IFormAddVehicle) => {
    setLoading(true);
    const objToSave = {
      ...data,
    };
    if (!id) {
      if (vehicles.some((it) => it.licensePlate === objToSave.licensePlate)) {
        alert("Placa já cadastrada");
        setLoading(false);
        return;
      }
      const addedObject = MMKVServiceVehicles.add(objToSave);
      setId(addedObject.id ?? "");
      navigation.navigate("Main" as never);
    } else {
      if (vehicles.some((it) => it.licensePlate === objToSave.licensePlate)) {
        alert("Placa já cadastrada");
        setLoading(false);
        return;
      }
      const objToUpdate = {
        ...MMKVServiceVehicles.get(id),
        ...objToSave,
      };
      MMKVServiceVehicles.update(id, objToUpdate as any);
      setId(id);
      navigation.navigate("Main" as never);
    }

    setLoading(false);
  };
  return (
    <KeyboardAvoidingView>
      <S.Content>
        <S.Text>Modelo</S.Text>
        <Controller
          control={control}
          name="model"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoCorrect={false}
              value={value}
              hasValidation
              onBlur={() => {
                onBlur();
                trigger(["model"]);
              }}
              onChangeText={(e) => {
                onChange(e);
              }}
              error={!!errors?.model}
              required
            />
          )}
        />
        <S.Text>Placa do carro</S.Text>
        <Controller
          control={control}
          name="licensePlate"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoCorrect={false}
              value={value}
              hasValidation
              onBlur={() => {
                onBlur();
                trigger(["licensePlate"]);
              }}
              onChangeText={(e) => {
                onChange(e);
              }}
              error={!!errors?.licensePlate}
              required
            />
          )}
        />

        <S.LineLabel>
          <Button
            text="Guardar"
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          />
        </S.LineLabel>
      </S.Content>
    </KeyboardAvoidingView>
  );
};

export default RegisterVehicleScreen;
