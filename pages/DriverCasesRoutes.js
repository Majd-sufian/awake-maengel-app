import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyCases from "../CasesPages/MyCases";
import SinglePage from "../CasesPages/SingleCase";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerTitleAlign: "center",
};

export default function DriverCasesRoutes({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="My Case"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen name="My Cases" component={MyCases} />
      <Stack.Screen name="SinglePage" component={SinglePage} />
    </Stack.Navigator>
  );
}
