import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import * as S from "./styles";
import { MMKVService } from "../../config/mmkvStorage";
import ItemList from "../../components/ItemList";

const HomeScreen = () => {
  const [data, setData] = useState(MMKVService.list());

  useEffect(() => {
    setData(MMKVService.list());
  }, [MMKVService]);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemList data={item} />}
        ListEmptyComponent={() => (
          <S.Content
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <S.Text>Não há dados disponíveis</S.Text>
          </S.Content>
        )}
      />
    </View>
  );
};

export default HomeScreen;
