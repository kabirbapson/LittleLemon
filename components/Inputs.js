import React from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

function Inputs({ label, value, onChangeText }) {
  return (
    <View style={{ width: "100%", margin:10 }}>
      <Text style={{ marginLeft: 4, marginVertical:-4 }}>{label}</Text>
      <TextInput
        value={value}
        placeholder={label}
        onChangeText={onChangeText}
        mode="outlined"
      />
    </View>
  );
}

export default Inputs;
