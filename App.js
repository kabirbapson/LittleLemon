import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigators/RootNavigator";
import Onboarding from "./screens/Onboarding";
import Profile from "./screens/Profile.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./screens/Home";
const Stack = createNativeStackNavigator();




export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("profile")
      .then((user) => {
        // console.log(user, "App");
        if (!user) {
          setIsSignedIn(false);
          return;
        }
        setIsSignedIn(true);
      })
      .catch((err) => console.log(err));
  }, [isSignedIn]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerBackVisible: false, headerShown: false }}
      >
        <Stack.Screen
              name="home"
              options={{ title: "Home" }}
              component={Home}
            />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        
        {/* {isSignedIn ? (
          <>
            <Stack.Screen
              name="home"
              options={{ title: "Home" }}
              component={Home}
            />
            <Stack.Screen name="profile" component={Profile} />
          </>
        ) : (
            <>
            <Stack.Screen name="onboarding" component={Onboarding} />
            </>
            
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
