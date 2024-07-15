import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import * as S from "./styles";
import { MMKVService } from "../../config/mmkvStorage";
import ItemList from "../../components/ItemList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ModalConfirm from "../../components/ModalConfirm";
import { RootStackNavigationProp } from "../../models/routes";

const HomeScreen = () => {
  const [data, setData] = useState(MMKVService.list());
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getData = useCallback(() => {
    setData(MMKVService.list());
  }, []);

  useEffect(() => {
    getData();
  }, [MMKVService]);

  const navigation = useNavigation<RootStackNavigationProp>();
  useFocusEffect(
    useCallback(() => {
      getData();
      setSelected(null);
    }, [])
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemList
            data={item}
            selected={item === selected}
            setSelected={() => {
              if (item === selected) {
                setSelected(null);
              } else {
                setSelected(item);
              }
            }}
          />
        )}
        ListHeaderComponent={() => {
          return (
            <>
              {data.length > 0 ? (
                <S.Header>
                  <S.HeaderItem width={5}></S.HeaderItem>
                  <S.HeaderItem width={65}>
                    <S.Text>Descrição</S.Text>
                  </S.HeaderItem>
                  <S.HeaderItem width={30}>
                    <S.Text>Vínculo</S.Text>
                  </S.HeaderItem>
                </S.Header>
              ) : null}
            </>
          );
        }}
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
      {selected ? (
        <S.ButtonView>
          <S.Button
            onPress={() => {
              navigation.navigate("AddDriverStack", {
                screen: "registerScreen",
                params: {
                  id: selected.id,
                },
              });
            }}
          >
            <S.Text>Editar</S.Text>
          </S.Button>
          <S.Button onPress={() => setModalVisible(true)}>
            <S.Text>Deletar</S.Text>
          </S.Button>
        </S.ButtonView>
      ) : null}
      <ModalConfirm
        modalIsVisible={modalVisible}
        onChangeVisible={() => setModalVisible(false)}
        setDelete={() => {
          MMKVService.remove(selected.id);
          setSelected(null);
          getData();
        }}
      />
    </View>
  );
};

export default HomeScreen;
