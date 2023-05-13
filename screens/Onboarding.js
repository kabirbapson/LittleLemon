import { useState } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

export default function Onboarding() {
  const [disabled, setDisabled] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "#B2BEB5", flex: 1 }}>
      <View>
        <Image
          style={{ width: "100%", height: 80 }}
          resizeMode="contain"
          source={require("./assets/Logo.png")}
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
              Last Name
            </Text>
            <TextInput
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
          disabled={disabled}
          onPress={() => console.log("object")}
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
