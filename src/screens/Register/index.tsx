import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";

import { Controller, useForm } from "react-hook-form";
import { schemaDriver } from "../../services/addDriver.schema";
import { InputButton } from "../../components/InputButton";
import { Button } from "../../components/Button";
import { MMKVService } from "../../config/mmkvStorage";
import { useNavigation } from "@react-navigation/native";

interface PropsForm {
  name: string;
  cpf: string;
  vehicle: string;
}

const RegisterScreen = (data) => {
  const [vehicles, setVehicles] = useState<{ name: string; key: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState(data.route.params.id);
  const [hasData] = useState(id ? MMKVService.get(id) : undefined);
  const {
    control,
    formState: { errors },
    trigger,
    getValues,
    setValue,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaDriver),
    mode: "onBlur",
    defaultValues: {
      name: hasData?.name ?? "",
      cpf: hasData?.cpf ?? "",
      vehicle: hasData?.vehicle ?? "",
    },
  });

  const navigation = useNavigation();
  const onSubmit = async (data: PropsForm) => {
    setLoading(true);
    const objToSave = {
      ...data,
      id: `${new Date()}`,
    };
    if (!id) {
      const addedObject = MMKVService.add(objToSave);
      setId(addedObject.id ?? "");
      navigation.navigate("Main" as never);
    } else {
      const objToUpdate = {
        ...MMKVService.get(id),
        ...objToSave,
      };
      MMKVService.update(id, objToUpdate as any);
      setId(id);
      navigation.navigate("Main" as never);
    }

    setLoading(false);
  };
  return (
    <KeyboardAvoidingView>
      <S.Content>
        <S.Text>Nome</S.Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoCorrect={false}
              value={value}
              hasValidation
              onBlur={() => {
                onBlur();
                trigger(["name"]);
              }}
              onChangeText={(e) => {
                onChange(e);
              }}
              error={!!errors?.name}
              required
            />
          )}
        />
        <S.Text>CPF</S.Text>
        <Controller
          control={control}
          name="cpf"
          rules={{
            validate: async () => {
              return await schemaDriver
                .validateAt("cpf", {
                  cpf: getValues("cpf"),
                })
                .then(() => true)
                .catch((error) => error.message);
            },
          }}
          render={({ field: { onBlur, value, onChange } }) => (
            <Input
              placeholder={"000.000.000-00"}
              accessibilityLabel={"CPF"}
              testID="cpf"
              defaultValue=""
              value={value}
              hasValidation
              onBlur={() => {
                onBlur();
                trigger(["cpf"]);
              }}
              onChangeText={(e) => {
                onChange(e);
              }}
              maxLength={14}
              keyboardType="numeric"
              autoCapitalize="none"
              error={!!errors?.cpf}
              required
            />
          )}
        />
        <S.Text>Vincule um veículo</S.Text>
        <Controller
          control={control}
          name="vehicle"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputButton
              message="Selecione a unidade do evento"
              options={vehicles}
              noEditable={vehicles.length === 0}
              hasValidation
              value={value}
              error={!!errors?.vehicle}
              onBlur={onBlur}
              setState={(e) => {
                onChange(e);
              }}
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

export default RegisterScreen;
