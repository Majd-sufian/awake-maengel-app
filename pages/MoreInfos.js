import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import * as Location from "expo-location";
import { useStateValue } from "../store/StateProvider";

export default function MoreInfos({ navigation }) {
  const [location, setLocation] = useState({});
  const [description, setDescription] = useState({});
  const [fotos, setFotos] = useState(
    "https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  );
  const [{}, dispatch] = useStateValue();

  async function addMoreInfos() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      setErrorMessage("Access to location is needed to run the app");
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    setLocation({ latitude: latitude, longitude: longitude });
    dispatch({
      type: "Add_More_Info",
      location: {
        lat: latitude,
        long: longitude,
      },
      caseFotos: fotos,
      caseDescription: description,
    });

    alert("We need to use your current location");
    navigation.navigate("OverView");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(event) => setDescription(event)}
        autoFocus={true}
      />
      <Button title="submit" onPress={addMoreInfos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
});
