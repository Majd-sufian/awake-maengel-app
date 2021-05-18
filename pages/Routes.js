import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import Login from "./Login";
import BusNumber from "../Technickpages/BusNumber";
import Systems from "../Technickpages/Systems";
import Options from "../Technickpages/Options";
import Positions from "../Technickpages/Positions";
import ReviewCase from "../Technickpages/OverView";
import MoreInfos from "../Technickpages/MoreInfos";
import OverView from "../Technickpages/OverView";
import UnfallMeldung from "../unfallPages/UnfallMeldung";
import MoreInfosUnfallMeldung from "../unfallPages/MoreInfosUnfallMeldung";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerTitleAlign: "center",
};

export default function ({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Bus Number" component={BusNumber} />
      <Stack.Screen name="Bitte wählen Sie ein System" component={Systems} />
      <Stack.Screen name="Optionen" component={Options} />
      <Stack.Screen name="Positionen" component={Positions} />
      <Stack.Screen name="review case" component={ReviewCase} />
      <Stack.Screen name="Add More Infos" component={MoreInfos} />
      <Stack.Screen name="OverView Case" component={OverView} />
      <Stack.Screen name="UnfallMeldung" component={UnfallMeldung} />
      <Stack.Screen
        name="MoreInfosUnfallMeldung"
        component={MoreInfosUnfallMeldung}
      />
    </Stack.Navigator>
  );
}
