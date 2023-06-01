import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Onboarding({ navigation }) {
  const [disabled, setDisabled] = useState(true);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setFname(e);
    if (fname.length > 0) {
      setDisabled(false);
    }
    if (!isNaN(fname)) {
      setDisabled(true);
    }
  };
  const handleEmail = (e) => {
    setEmail(e);
    if (email.length > 0) {
      setDisabled(false);
    }
    if (!isNaN(email)) {
      setDisabled(true);
    }
  };
  const onNext = () => {
    AsyncStorage.setItem("user", JSON.stringify({ fname, email }));
    console.log("first");
    navigation.navigate("profile");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#B2BEB5", flex: 1 }}>
      <View>
        <Image
          style={{ width: "100%", height: 80 }}
          resizeMode="contain"
          source={require("./../assets/Logo.png")}
        />
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
          Lets get to know you
        </Text>
        <View
          style={{
            //   flex: 1,
            height: "80%",
            justifyContent: "flex-end",
            //   backgroundColor: "green",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", margin: 20 }}>
              First Name
            </Text>
            <TextInput
              value={fname}
              keyboardType="default"
              onChangeText={(e) => handleName(e)}
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 10,
                padding: 10,
                width: "60%",
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", margin: 20 }}>
              Email
            </Text>
            <TextInput
              keyboardType="email-address"
              value={email}
              onChangeText={(e) => handleEmail(e)}
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 10,
                padding: 10,
                width: "60%",
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: "red",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: 20,
        }}
      >
        <Pressable
          disabled={fname.length < 1 && email.length < 1 ? true : false}
          onPress={onNext}
          style={{
            padding: 0,
            backgroundColor: "gray",
            borderRadius: 10,
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 20,
              margin: 10,
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
