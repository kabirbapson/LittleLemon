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
export default function App() {
  const [status, setStatus] = React.useState(true);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
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
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size }) => {
            let iconName;
            if (route.name === "Login") {
              iconName = "ios-information-circle";
            } else  {
              iconName = "ios-list";
            }
            return <Ionicons name={iconName} size={size} />;
          },
        })}
        //     ? 'ios-information-circle'
        //     : 'ios-information-circle-outline';
        // } else if (route.name === 'Menu') {
        //   iconName =  'ios-list';
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="MenuItems" component={MenuItems} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
