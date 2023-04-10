import * as React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
});
