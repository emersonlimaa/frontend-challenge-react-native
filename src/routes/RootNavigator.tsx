import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigators";
import { AddDriverStack } from "./addDriver";
import { AddVehicleStack } from "./addVehicle";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddDriverStack"
        component={AddDriverStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddVehicleStack"
        component={AddVehicleStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
