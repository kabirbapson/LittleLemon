import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigators/RootNavigator";
import Onboarding from "./screens/Onboarding";
import Profile from "./screens/Profile.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WelcomeScreen from "./components/WelcomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => {
        console.log(user, 'App')
        if (!user) {
          setIsSignedIn(false)
          return
        }
        setIsSignedIn(true)
      })
      .catch((err) => console.log(err));
  }, [isSignedIn]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackVisible: true }}>
        {isSignedIn ? (
          <Stack.Screen name="profile" component={Profile} />
          ) : (
          <Stack.Screen name="onboarding" component={Onboarding} />
        )}
          <Stack.Screen name="welcome" component={WelcomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
