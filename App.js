import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";
import { MenuItems } from "./components/MenuItems";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RootNavigator from "./navigators/RootNavigator";
import hel from "./menuItems.json";

export default function App() {
  const [status, setStatus] = React.useState(true);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [data, setData] = useState([]);

  // console.log(hel.hel);
  console.log(
    JSON.stringify({
      name: "Meta User",
      email: "mataUser@example.com",
      password: "abc123$",
    })
  );

  const json = '{"answered":true, "count":20}';
  const obj = JSON.parse(json);

  console.log(obj.count);
  // console.log(data);
  return (
    // <NavigationContainer>
    //  <RootNavigator />
    // </NavigationContainer>
    <View
      style={{
        // width: "90%",
        flex: 1,
        backgroundColor: "#495E57",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView>
        <Text>fsjkgnfd</Text>
      </SafeAreaView>
      <FlatList
        data={hel.menu}
        renderItem={({ item }) => (
          <View
            style={{
              width: 400,
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 30, color: "#F4CE14" }}>{item.title}</Text>
            <Text style={{ fontSize: 30, color: "#F4CE14" }}>
              ${item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
