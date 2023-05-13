import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-paper";

export default function Profile() {
  const [disabled, setDisabled] = useState(true);
  const [fname, setFname] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => setUser(JSON.parse(user)))
      .catch((err) => console.log(err));
    console.log(user, "fjj");
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#B2BEB5", flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems:'center', padding:10 }}>
        <Avatar.Image
          style={{ margin: 10 }}
          size={100}
          source={require("./../assets/kbpp.jpg")}
        />
        <Button
          mode="contained"
          style={{ width: 100, height: 40, backgroundColor: "green", margin:10 }}
        >
          fdgf
        </Button>
        <Button mode="outlined" style={{ width: 100 }}>
          fdgf
        </Button>

        {/* <Image
          style={{ width: "100%", height: 80 }}
          resizeMode="contain"
          source={require("./assets/Logo.png")}
        /> */}
      </View>
      <View
        style={{
          alignItems: "center",
          height: "70%",
          marginTop: 10,
          padding: 10,
          backgroundColor: "#808080",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "400", margin: 20 }}>
          Profile Page of {user && user.fname}
        </Text>
      </View>
    </SafeAreaView>
  );
}
