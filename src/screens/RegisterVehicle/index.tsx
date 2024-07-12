import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";

import { Controller, useForm } from "react-hook-form";
import { schemaVehicle } from "../../services/addVehicle.schema";
import { Button } from "../../components/Button";
import { MMKVService } from "../../config/mmkvStorage";
import { useNavigation } from "@react-navigation/native";

interface PropsForm {
  name: string;
  cpf: string;
  vehicle: string;
}

const RegisterVehicleScreen = (data) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState(data.route.params?.id ?? "");
  const [hasData] = useState(id ? MMKVService.get(id) : undefined);
  const {
    control,
    formState: { errors },
    trigger,
    getValues,
    setValue,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaVehicle),
    mode: "onBlur",
    defaultValues: {
      name: hasData?.name ?? "",
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
