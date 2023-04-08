import React from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const Login = ({ handleOnPress }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 20, margin: 10, color: "#EDEFEE" }}>
        Login to Continue
      </Text>

      <View
        style={{
          width: "90%",
          margin: 10,
          padding: 10,
          //   backgroundColor: "white",
        }}
      >
        <TextInput
          style={{ padding: 10, marginVertical: 10, backgroundColor: "white" }}
        />
        <TextInput
          style={{ padding: 10, marginVertical: 10, backgroundColor: "white" }}
        />
      </View>
      
      <TouchableHighlight
        underlayColor="red"
        // activeOpacity={0.5}
        onPress={() => {}}
        style={{
          backgroundColor: "#EE9972",
          margin: 20,
          padding: 5,
          borderRadius: 20,
          width: "50%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, margin: 10, fontWeight: "700" }}>
          Login
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
