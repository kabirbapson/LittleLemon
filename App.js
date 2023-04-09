import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";
import { MenuItems } from "./components/MenuItems";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const [status, setStatus] = React.useState(true);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "fade_from_bottom",
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
         
        }}
      >
        <Stack.Screen options={{ headerTitle: 'huy'}} name="Login" component={Login} />
        <Stack.Screen
          options={{ headerTitle: "vhv" }}
          name="MenuItems"
          component={MenuItems}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
