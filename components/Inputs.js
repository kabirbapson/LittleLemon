import React from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

function Inputs({ label, value, onChangeText }) {
  return (
    <View style={{ width: "100%", margin:4 }}>
      <Text style={{ marginLeft: 4 }}>{label}</Text>
      <TextInput
        value={value}
        placeholder={label}
        onChangeText={onChangeText}
        style={{ marginBottom: 4 }}
        label={label}
        mode="outlined"
      />
    </View>
  );
}

export default Inputs;
