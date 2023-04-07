import React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "#EE9972" }}>
      <Text
        style={{
          alignSelf: "center",
          padding: 40,
          fontSize: 30,
          color: "black",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
