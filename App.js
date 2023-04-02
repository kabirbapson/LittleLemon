import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, borderRadius: 100 }}>
        <LittleLemonHeader />
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
    backgroundColor: "#495e57",
    // alignItems: 'center',
    // justifyContent: "flex-start",
    // padding:25
  },
});
