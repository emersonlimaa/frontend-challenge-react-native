import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/Register";
import { Alert, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import RegisterVehicleScreen from "../screens/RegisterVehicle";

const { Navigator, Screen } = createNativeStackNavigator<any>();

export function AddVehicleStack() {
  const navigation = useNavigation();
  return (
    <Navigator screenOptions={{ animation: "ios" }}>
      <Screen
        name="registerVehicleScreen"
        component={RegisterVehicleScreen}
        options={{
          title: "Cadastrar veículos",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="#000"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}
