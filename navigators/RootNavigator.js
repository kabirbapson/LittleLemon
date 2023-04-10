import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen options={{title:'Welcome'}} name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen options={{title:'Subscribe'}} name="SubscribeScreen" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
