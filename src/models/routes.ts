import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface RegisterVehicleScreenParams {
  id: string; 
}

export type AddVehicleStackParamList = {
  registerVehicleScreen: RegisterVehicleScreenParams;
};

export type AddVehicleStackNavigationProp = NativeStackNavigationProp<
  AddVehicleStackParamList,
  'registerVehicleScreen'
>;

interface RegisterScreenParams {
  id: string; 
}

export type AddDriverStackParamList = {
  registerScreen: RegisterScreenParams;
};

export type AddDriverStackNavigationProp = NativeStackNavigationProp<
  AddDriverStackParamList,
  'registerScreen' // Initial screen
>;

export type RootStackParamList = {
  AddDriverStack: undefined;
  AddVehicleStack: undefined
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

