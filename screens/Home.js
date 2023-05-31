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

  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
      );
      tx.executeSql('INSERT INTO items (name) VALUES (?)', ['Item 1']);
      tx.executeSql('SELECT * FROM items', [], (_, { rows }) => {
        // Handle query results
        const items = rows._array;
        console.log(items);
      });
    });
  }, []);
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"
    )
      .then((data) => data.json())
      .then((menu) => setData(menu.menu))
      .catch((err) => console.log(err));

    AsyncStorage.getItem("profile")
      .then((user) => {
        // console.log("Profile", JSON.parse(user));
        setUser(JSON.parse(user));
        setPic(user.pic);
      })
      .catch((err) => console.log(err));
  }, []);
  // Add welcome screen code here.
  const renderItem = () => {
    return <></>;
  };
  console.log(text);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          // backgroundColor:'red',
          width: "100%",
          height: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: 200,
            alignSelf: "center",
            position: "absolute",
            right: "25%",
          }}
          resizeMode="contain"
          source={require("./../assets/Logo.png")}
        />
        <Button
          onPress={() => navigation.navigate("profile")}
          style={{
            backgroundColor: "green",
            position: "absolute",
            right: 10,
          }}
        >
          <Avatar.Image size={50} source={{ uri: user.pic }} />
        </Button>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          // height: 100,
          // flex:1,
          margin: "10%",
        }}
      >
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            margin: 15,
            backgroundColor: "#B7A8A8",
            width: "105%",
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                height: 200,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Little Lemon
              </Text>
              <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "600" }}>
                Abuja
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                We are family owned Mediterranean restaurant. focused on
                traditional recipes served with a modern twist
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                height: 200,
                marginLeft: 20,
              }}
            >
              <Image
                resizeMode="cover"
                style={{
                  borderRadius: 20,
                  width: 160,
                  height: 180,
                  marginTop: 10,
                  alignSelf: "center",
                }}
                source={require("../assets/Hero.png")}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              backgroundColor: "#D9D9D9",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="search" size={25} />
            <TextInput
              mode="flat"
              inlineImageLeft="..ƒ/assets/hero.pngr"
              style={{ width: "90%", marginLeft: 5 }}
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <Text style={{ fontWeight: "bold" }}>ORDER FOR DELIVERY</Text>
          <View style={{ flexDirection: "row" }}>
            {["Starters", "Mains", "Desserts", "Drinks"].map((items) => (
              <Button
                onPress={() => console.log(items)}
                style={{
                  margin: 10,
                  backgroundColor: "#D9D9D9",
                  borderRadius: 10,
                }}
              >
                <Text>{items}</Text>
              </Button>
            ))}
          </View>
        </View>
        <View style={{ width: "100%", height: "43%" }}>
          <FlatList
            ItemSeparatorComponent={<Divider style={{}} />}
            data={data}
            renderItem={({ item }) => (
              <View
                onPress={() => console.log(items)}
                style={{
                  width: "80%",
                  flexDirection: "row",
                  margin: 5,
                  padding: 10,
                  // backgroundColor: "#D9D9D9",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ justifyContent: "space-around", width: "90%" }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text style={{ marginVertical: 5 }}>{item.description}</Text>
                  <Text style={{ fontSize: 18 }}>${item.price}</Text>
                </View>
                <View
                // style={{ width: '100%', backgroundColor: 'green' }}
                >
                  {/* {[0, 2, 3,].map(items => <Text>{ items}</Text>)} */}
                  <Image
                    style={{
                      borderRadius: 10,
                      width: 100,
                      height: 100,
                    }}
                    resizeMode="cover"
                    source={require("./../assets/Greeksalad.png")}
                  />
                </View>
              </View>
            )}
          />
        </View>
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
