import { TouchableOpacity, View } from "react-native";
import { normalize } from "../../types/normalilze";
import theme from "../../theme";
import moment from "moment";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
export default function ItemList(data) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: normalize(24), padding: 8 }}>
      <S.Line style={{ justifyContent: "space-between" }}>
        <S.Description> Nª do chamado {data?.id}</S.Description>
        <S.Line>
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddDriverStack", {
                  screen: "registerScreen",
                  params: {
                    id: data.data.id,
                  },
                });
              }}
            >
              <S.IconStyled
                name="pencil-outline"
                size={normalize(18)}
                color={theme.colors.primary_blue}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <S.IconStyled
                name="delete"
                size={normalize(18)}
                color={theme.colors.primary_blue}
              />
            </TouchableOpacity>
          </>
        </S.Line>
      </S.Line>
      <S.TextDate>{moment(data?.id).format("DD/MM/YYYY HH:mm")}</S.TextDate>
      <S.Separator />
    </View>
  );
}
