// BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import VehiclesScreen from "../screens/Vehicles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation<any>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="people"
              color={color}
              size={size}
              style={{ marginTop: 8 }}
            />
          ),
          headerTitle: "Motoristas",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddDriverStack", {
                  screen: "registerScreen",
                })
              }
            >
              <Ionicons
                name="add-circle"
                size={24}
                color="#000"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={VehiclesScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="car"
              color={color}
              size={size}
              style={{ marginTop: 8 }}
            />
          ),
          headerTitle: "Veículos",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddVehicleStack", {
                  screen: "registerVehicleScreen",
                })
              }
            >
              <Ionicons
                name="add-circle"
                size={24}
                color="#000"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
