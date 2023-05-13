import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigators/RootNavigator";
import Onboarding from "./screens/Onboarding";
import Profile from "./screens/Profile.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => {
        setUser(user);
        setIsSignedIn(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {isSignedIn ? (
          <Stack.Screen name="onboarding" component={Onboarding} />
        ) : (
          <Stack.Screen name="profile" component={Profile} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
