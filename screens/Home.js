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
import { Avatar, Button, TextInput } from "react-native-paper";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
export default function Home({ navigation }) {
  const [user, setUser] = React.useState("");
  const [data, setData] = React.useState();
  const [pic, setPic] = React.useState("");

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
              marginTop: 20,
              backgroundColor: "green",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput inlineImageLeft="../assets/hero.pngr" style={{ width: "90%" }} />
          </View>
        </View>

        <View style={{width:'100%'}}>

        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
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
