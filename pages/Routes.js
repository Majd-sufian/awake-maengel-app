import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import BusNumber from "../Technickpages/BusNumber";
import Systems from "../Technickpages/Systems";
import Options from "../Technickpages/Options";
import Positions from "../Technickpages/Positions";
import ReviewCase from "../Technickpages/OverView";
import MoreInfos from "../Technickpages/MoreInfos";
import OverView from "../Technickpages/OverView";
// import SinglePage from "../CasesPages/SingleCase";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerTitleAlign: "center",
};

export default function({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Bus Number" component={BusNumber} />
      <Stack.Screen name="Please select a system" component={Systems} />
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Positions" component={Positions} />
      <Stack.Screen name="review case" component={ReviewCase} />
      <Stack.Screen name="Add More Infos" component={MoreInfos} />
      <Stack.Screen name="OverView Case" component={OverView} />
      {/* <Stack.Screen name="SinglePage" component={SinglePage} /> */}
    </Stack.Navigator>
  );
}
