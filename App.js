import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";
import { MenuItems } from "./components/MenuItems";

export default function App() {
  const [status, setStatus] = React.useState(true);
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <LittleLemonHeader />
        {/* <MenuItems /> */}
        <View style={{ alignItems: "center", margin: 10, padding: 10 }}>
          <Text style={{ fontSize: 30, color: "#EDEFEE" }}>
            Welcome to Little Lemon
          </Text>
        </View>
        {status ? (
          <Login handleOnPress={() => setStatus(!status)} />
        ) : (
          <Text
            style={{
              padding: 40,
              fontSize: 30,
              color: "#EDEFEE",
              textAlign: "center",
            }}
          >
            You are logged in!
          </Text>
        )}
      </View>
      <View>
        <LittleLemonFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
