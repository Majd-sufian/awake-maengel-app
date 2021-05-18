import React from "react";
import Routes from "./pages/Routes";
import DriverCasesRoutes from "./pages/DriverCasesRoutes";
import DriverUnfallRoutes from "./pages/DriverUnfallRoutes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Routes} />
        <Drawer.Screen name="Meine Cases" component={DriverCasesRoutes} />
        <Drawer.Screen name="Unfälle" component={DriverUnfallRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
