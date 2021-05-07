import React from "react";
import Routes from "./pages/Routes";
import DriverCasesRoutes from "./pages/DriverCasesRoutes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StateProvider } from "./store/StateProvider";
import reducer, { initialState } from "./store/reducer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="My Cases">
          <Drawer.Screen name="Home" component={Routes} />
          <Drawer.Screen name="My Cases" component={DriverCasesRoutes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

// export default withAuthenticator(App);
