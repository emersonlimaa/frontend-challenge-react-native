import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootNavigator } from "./RootNavigator";

export function Routes() {
  const navigation = React.useRef(null);
  return (
    <NavigationContainer ref={navigation} independent>
      <RootNavigator />
    </NavigationContainer>
  );
}
