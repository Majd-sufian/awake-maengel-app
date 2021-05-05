import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyCases from "../CasesPages/MyCases";
import SinglePage from "../CasesPages/SingleCase";
import PostFeedback from "../CasesPages/PostFeedback";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerTitleAlign: "center",
};

export default function DriverCasesRoutes({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MyCases"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen name="MyCases" component={MyCases} />
      <Stack.Screen name="SinglePage" component={SinglePage} />
      <Stack.Screen name="PostFeedback" component={PostFeedback} />
    </Stack.Navigator>
  );
}
