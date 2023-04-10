import * as React from "react";
import {
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { validateEmail } from "./../utils/index";
const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const isValid = validateEmail(email);
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image
        source={require("./../assets/little-lemon-logo-grey.png")}
        style={{ margin: 10, width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          margin: 20,
          padding: 10,
        }}
      >
        Subscribe to our newsletter for our latest delivious recipes!
      </Text>
      <TextInput
        keyboardType="email-address"
        placeholder="Enter your email"
        value={email}
        onChangeText={(e) => setEmail(e)}
        style={{
          width: "100%",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}
      />
      <Pressable
        disabled={!isValid}
        onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
        style={[
          {
            backgroundColor: "blue",
            margin: 10,
            padding: 10,
            width: "100%",
            borderRadius: 10,
          },
          !isValid && { backgroundColor: "grey", opacity: 0.2 },
        ]}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
          Subscribe{" "}
        </Text>
        {/* <Button title="Newsletter"
        onPress={() => console.log(email)} disabled={true} /> */}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
});
