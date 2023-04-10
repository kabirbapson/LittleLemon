import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";
import { MenuItems } from "./components/MenuItems";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RootNavigator from "./navigators/RootNavigator";
export default function App() {
  const [status, setStatus] = React.useState(true);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
     <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
