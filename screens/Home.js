import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar, Button, Divider, TextInput } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("database.db");


export default function Home({ navigation }) {
  const [user, setUser] = React.useState("");
  const [data, setData] = React.useState();
  const [pic, setPic] = React.useState("");
  const [text, setText] = React.useState("");

  React.useEffect( async() => {
    console.log(await AsyncStorage.getAllKeys())
    console.log(await AsyncStorage.getItem('user'))
  }, []);
  React.useEffect(() => {}, []);
  


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          marginTop: 20,
        }}
      >
        <Button
          onPress={() => navigation.navigate("profile")}
          style={{
            // backgroundColor: "red",
            padding: 10,
            margin: 10,
            // width: 50,
            // height: 50,
            // position: "absolute",

            // right: 10,
          }}
        >
          <Text >Web View</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    margin: 10,
    padding: 10,
  },
});
