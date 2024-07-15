import { View } from "react-native";
import { normalize } from "../../types/normalilze";
import theme from "../../theme";
import * as S from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { IItemListDriver } from "../../models/Itemlist";

export default function ItemList({
  data,
  selected,
  setSelected,
}: IItemListDriver) {
  const attached = Object.keys(data.vehicle).length > 0;
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
