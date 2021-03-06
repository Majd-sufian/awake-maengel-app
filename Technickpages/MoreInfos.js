import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import * as Location from "expo-location";

export default function MoreInfos({ navigation, route }) {
  const { busNumber, busSystem, position, option } = route.params;

  const [location, setLocation] = useState({});
  const [description, setDescription] = useState([]);

  async function addMoreInfos() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      setErrorMessage("Access to location is needed to run the app");
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    setLocation({ latitude: latitude, longitude: longitude });

    alert("Bitte beachten Sie, dass Ihr Standort geteilt wird!");
    navigation.navigate("OverView Case", {
      busNumber: busNumber,
      busSystem: busSystem,
      position: position,
      option: option,
      location: location,
      description: description,
    });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 5,
          margin: 10,
        }}
      >
        BESCHREIBUNG ÜBER DEN FALL HINZUFÜGEN
      </Text>
      <TextInput
        style={[styles.input, { width: "90%" }]}
        onChangeText={(event) => setDescription(event)}
        numberOfLines={4}
      />

      <View
        style={{
          textAlign: "center",
          backgroundColor: "#FEF4C0",
          width: "90%",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            textAlign: "center",
            margin: 10,
          }}
        >
          Bitte beachten Sie, dass Ihr Standort geteilt wird!
        </Text>
      </View>

      {description.length == 0 ? (
        <View
          activeOpacity={1}
          style={[
            styles.button,
            { backgroundColor: "grey", textAlign: "center" },
          ]}
        >
          <Text style={styles.text}>Submit</Text>
        </View>
      ) : (
        <View
          onClick={addMoreInfos}
          style={[
            styles.button,
            { backgroundColor: "red", textAlign: "center" },
          ]}
        >
          <Text style={styles.text}>Submit</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    padding: 16,
    margin: 16,
    width: 200,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
