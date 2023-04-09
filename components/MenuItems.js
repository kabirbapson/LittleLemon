import React from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SectionList,
  Text,
    View,
  TextInput,
  ScrollView
} from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];


export const MenuItems = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 0.8, backgroundColor: "green" }}
      >
          <ScrollView style={{flex:0.7}}>
              
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ margin: 2 }}>{item.name}</Text>
              <Text style={{ margin: 2 }}>{item.price}</Text>
            </View>
          );
        }}
        renderSectionHeader={(item) => (
          <View
            style={{
              padding: 10,
              backgroundColor: "yellow",
              alignItems: "center",
            }}
          >
            <Text>{item.section.title}</Text>
          </View>
        )}
        //   onScroll={Keyboard.isVisible}
        //   onScrollBeginDrag={Keyboard.dismiss}
        //   keyboardDismissMode="interactive"
        ListHeaderComponent={() => (
          <View style={{ borderWidth: 1, borderColor: "blue" }}>
            <Text>Blue BNlues</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View
            style={{
              borderWidth: 1,
              borderColor: "tomato",
              alignItems: "center",
            }}
          >
            <Text>All right reserved</Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ borderWidth: 1, borderColor: "white" }}></View>
        )}
        keyExtractor={(item, index) => item + index}
      />
      <TextInput
        keyboardAppearance="dark"
        style={{ backgroundColor: "red", padding: 10 }}
              />
          </ScrollView>
              
    </KeyboardAvoidingView>
  );
};
