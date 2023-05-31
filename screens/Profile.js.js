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
import { Avatar, Button, Checkbox, Chip, Title } from "react-native-paper";
import Inputs from "../components/Inputs";
import { MaskedTextInput } from "react-native-mask-text";
import image from "./../assets/kbpp.jpg";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState("");
  const [number, setNumber] = useState();
  const [pic, setPic] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("profile")
      .then((user) => {
        console.log("Profile", JSON.parse(user));
        setUser(JSON.parse(user));
        setPic(user.pic);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigation = useNavigation();
  const pickPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPic(result.assets[0].uri);
    }
  };

  console.log("msjsjjs", user.number);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", marginHorizontal: 4, flex: 1 }}
    >
      <Title style={{ marginLeft: 10 }}>Personal Information</Title>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          paddingLeft: 10,
          marginTop: 10,
        }}
      >
        {user.pic ? (
          <Avatar.Image size={80} source={{ uri: user.pic }} />
        ) : (
          <Avatar.Text
            size={80}
            label={
              user.user &&
              (user.user.fname.split(" ")[0].charAt(0) + user &&
              user.user.fname.split(" ")[1].charAt(0))
            }
          />
        )}
        <Button
          mode="contained"
          style={{
            backgroundColor: "green",
            marginHorizontal: 10,
          }}
          onPress={pickPicture}
        >
          <Text>Change</Text>
        </Button>
        <Button onPress={() => setPic(null)} mode="outlined">
          <Text>Remove</Text>
        </Button>
      </View>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Inputs
          label={"First Name"}
          value={user && user.user.fname.split(" ")[0]}
        />
        <Inputs
          label={"First Name"}
          value={user && user.user.fname.split(" ")[1]}
        />
        <Inputs label={"Email"} value={user && user.user.email} />
        <Text style={{ alignSelf: "flex-start" }}>Mobile</Text>
        <MaskedTextInput
          style={{
            width: "100%",
            height: 40,
            margin: 10,
            borderWidth: 1,
            paddingLeft: 10,
          }}
          placeholder="Mobile"
          value={user.number}
          mask="999-9999-9999"
          onChangeText={(e) => setNumber(e)}
        />
      </View>

      <View
        style={{
          // backgroundColor: "yellow",
          // alignItems: "center",
          margin: 10,
          padding: 10,
        }}
      >
        <Title>Email Notifications</Title>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <View
            style={{
              backgroundColor: "green",
              padding: 0.1,
              height: 35,
              width: 35,
              marginRight: 5,
            }}
          >
            <Checkbox
              uncheckedColor="red"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
                console.log("object");
              }}
              color="white"
            />
          </View>
          <Text>Order statuses</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <View
            style={{
              backgroundColor: "green",
              padding: 0.1,
              height: 35,
              width: 35,
              marginRight: 5,
            }}
          >
            <Checkbox
              uncheckedColor="red"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
                console.log("object");
              }}
              color="white"
            />
          </View>
          <Text>Order statuses</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <View
            style={{
              backgroundColor: "green",
              padding: 0.1,
              height: 35,
              width: 35,
              marginRight: 5,
            }}
          >
            <Checkbox
              uncheckedColor="red"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
                console.log("object");
              }}
              color="white"
            />
          </View>
          <Text>Order statuses</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <View
            style={{
              backgroundColor: "green",
              padding: 0.1,
              height: 35,
              width: 35,
              marginRight: 5,
            }}
          >
            <Checkbox
              uncheckedColor="red"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
                console.log("object");
              }}
              color="white"
            />
          </View>
          <Text>Order statuses</Text>
        </View>
      </View>
      <Button
        onPress={() => AsyncStorage.removeItem("user")}
        mode="contained-tonal"
        style={{
          backgroundColor: "orange",
          borderRadius: 10,
          marginHorizontal: 20,
        }}
      >
        Log Out
      </Button>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button
          onPress={() => console.log("user")}
          style={{ width: "40%" }}
          mode="outlined"
        >
          <Text>Discard Changes</Text>
        </Button>
        <Button
          onPress={() => {
            AsyncStorage.setItem(
              "profile",
              JSON.stringify({ user, number, pic })
            ).catch((err) => console.log(err));
            alert("Info saved");
          }}
          mode="contained"
          style={{
            width: "40%",
            height: 40,
            backgroundColor: "green",
            margin: 10,
          }}
        >
          <Text>Save Changes</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
