import React from "react";
import { Text, View } from "react-native";


export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: "#EE9972",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
