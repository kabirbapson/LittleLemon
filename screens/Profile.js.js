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
import { Avatar, Button, Chip, Title } from "react-native-paper";
import Inputs from "../components/Inputs";

export default function Profile() {
  const [disabled, setDisabled] = useState(true);
  const [fname, setFname] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => setUser(JSON.parse(user)))
      .catch((err) => console.log(err));
    // console.log(user, "fjj");
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", margin: 4 }}>
      <Title style={{ marginLeft: 10 }}>
        Personal Information
      </Title>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Avatar.Image 
          style={{ marginBottom: 10,  }}
          size={80} 
          source={require("./../assets/kbpp.jpg")}
        />
        <Button
          mode="contained"
          style={{
            width: 100,
            height: 40,
            backgroundColor: "green",
            margin: 10,
          }}
        >
          <Text>Change</Text>
        </Button>
        <Chip mode="outlined">
          <Text>Remove</Text>
        </Chip>
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
        <Inputs label={'First Name'} value={user.fname.split(' ')[0]} />
        <Inputs label={'First Name'} value={user.fname.split(' ')[1]} />

        <Inputs label={'First Name'} />
      </View>
    </SafeAreaView>
  );
}
