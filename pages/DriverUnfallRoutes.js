import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Unfälle from "../unfallPages/Unfälle";
import SingleUnfall from "../unfallPages/SingleUnfall";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerTitleAlign: "center",
};

export default function DriverUnfallRoutes({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Meine Unfälle"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen name="Unfälle" component={Unfälle} />
      <Stack.Screen name="SingleUnfall" component={SingleUnfall} />
    </Stack.Navigator>
  );
}
