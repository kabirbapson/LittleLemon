import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";
import { MenuItems } from "./components/MenuItems";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RootNavigator from "./navigators/RootNavigator";
export default function App() {
  const [status, setStatus] = React.useState(true);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [data, setData] = useState([]);
  const getMenuItems = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      const mydata = await response.json();
      setData(mydata.menu);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMenuItems();
  });

  // console.log(data);
  return (
    // <NavigationContainer>
    //  <RootNavigator />
    // </NavigationContainer>
    <View style={{width:'90%',flex:1,backgroundColor:'green', alignItems: "center", justifyContent: "center" }}>
      <SafeAreaView>
        <Text>fsjkgnfd</Text>
      </SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{backgroundColor:'red',flexDirection:'row', padding:10, width:'100%', alignItems:'flex-end',}}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
