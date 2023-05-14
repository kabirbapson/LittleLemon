import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-paper";

export default function Home({ navigation }) {
  const [user, setUser] = React.useState("");
  const [number, setNumber] = React.useState();
  const [pic, setPic] = React.useState("");
  React.useEffect(() => {
    AsyncStorage.getItem("profile")
      .then((user) => {
        console.log("Profile", JSON.parse(user));
        setUser(JSON.parse(user));
        setPic(user.pic);
      })
      .catch((err) => console.log(err));
  }, []);
  // Add welcome screen code here.
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop:20
        }}
      >
        <Image
          style={{
            width: 200,
            alignSelf: "center",
            height: 80,
            position: "absolute",
            right: "25%",
          }}
          resizeMode="contain"
          source={require("./../assets/Logo.png")}
        />
        <Button onPress={()=>navigation.navigate('profile')} style={{
          width: 100, position: "absolute", right:10 
        }}>

        <Avatar.Image 
          size={50}
          source={{ uri: user.pic }}
          />
          </Button>
      </View>
      <Image
        source={require("./../assets/little-lemon-logo.png")}
        style={{ flex: 1, width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          margin: 20,
          padding: 20,
        }}
      >
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        onPress={() => navigation.navigate("SubscribeScreen")}
        style={{
          backgroundColor: "blue",
          margin: 10,
          padding: 10,
          width: "100%",
          borderRadius: 10,
        }}
      >
        {/* <Button title='Newsletter' color={'white'} /> */}
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
          Newsletter{" "}
        </Text>
      </Pressable>
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
