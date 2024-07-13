import { View } from "react-native";
import { normalize } from "../../types/normalilze";
import theme from "../../theme";
import * as S from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { MMKVService } from "../../config/mmkvStorage";

export default function ItemListCar({ data, selected, setSelected }) {
  const [attached, setAttached] = useState(false);
  const drivers = MMKVService.list();

  useEffect(() => {
    const Attached = drivers.map((it) => it.vehicle.key);
    setAttached(Attached.includes(data?.id));
  }, [drivers]);

  return (
    <View style={{ marginTop: normalize(12), padding: 8 }}>
      <S.Content style={{ justifyContent: "space-between" }}>
        <S.Content>
          <S.Checkbox onPress={setSelected}>
            {selected ? (
              <FontAwesome
                name="check-square"
                color={theme.colors.primary_blue}
                size={20}
              />
            ) : (
              <FontAwesome
                name="square-o"
                color={theme.colors.primary_black}
                size={22}
              />
            )}
          </S.Checkbox>
          <S.DescriptionView>
            <S.Description>Modelo: {data?.model}</S.Description>
            <S.Description>Placa: {data?.licensePlate}</S.Description>
          </S.DescriptionView>
        </S.Content>
        <S.ContentAttached>
          {attached ? (
            <S.Attached>Sim</S.Attached>
          ) : (
            <S.Attached>Não</S.Attached>
          )}
        </S.ContentAttached>
      </S.Content>
      <S.Separator />
    </View>
  );
}
