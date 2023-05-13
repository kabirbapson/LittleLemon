import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen  name="SubscribeScreen" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
