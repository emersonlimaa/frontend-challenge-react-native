import { TouchableOpacity, View } from "react-native";
import { normalize } from "../../types/normalilze";
import theme from "../../theme";
import moment from "moment";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
interface IItemList {
  data: any;
  selected: boolean;
  setSelected: () => void;
}
export default function ItemList({ data, selected, setSelected }: IItemList) {
  const attached = data.vehicle;

  return (
    <View style={{ marginTop: normalize(12), padding: 8 }}>
      <S.Content style={{ justifyContent: "space-between" }}>
        <S.Content>
          <S.Checkbox onPress={setSelected}>
            {selected ? (
              <FontAwesome
                name="check-square"
                color={theme.colors.primary_black}
                size={20}
              />
            ) : (
              <FontAwesome
                name="square-o"
                color={theme.colors.primary_blue}
                size={22}
              />
            )}
          </S.Checkbox>
          <S.DescriptionView>
            <S.Description>{data.name}</S.Description>
            <S.Description>{data.cpf}</S.Description>
          </S.DescriptionView>
        </S.Content>

        <S.ContentAttached>
          {attached ? (
            <S.Attached>Sim</S.Attached>
          ) : (
            <S.Description>Não</S.Description>
          )}
        </S.ContentAttached>
      </S.Content>
      <S.Separator />
    </View>
  );
}