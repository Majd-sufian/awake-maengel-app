import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useStateValue } from "../store/StateProvider";
import BusNumber from "./BusNumber";
import axios from "axios";
import uuid from "react-native-uuid";

export default function OverView({ navigation }) {
  const [
    {
      busNumber,
      selectedSystem,
      systemOption,
      systemPosition,
      busLocation,
      caseFotos,
      caseDescription,
    },
  ] = useStateValue();

  const sendCase = () => {
    axios.put(
      "https://5brtqhkajh.execute-api.eu-central-1.amazonaws.com/items",
      {
        id: uuid.v4(),
        busNumber: busNumber,
        busSystems: {
          system: selectedSystem,
          position: systemPosition,
          option: systemOption,
        },
        description: caseDescription,
        done: false,
        driver: {
          name: "Majd Sufyan",
          email: "majd@gmail.com",
        },
        location: {
          lan: busLocation.lat,
          long: busLocation.long,
        },
        fotos: caseFotos,
      }
    );
    alert("Your case was successfully send");
    navigation.navigate("Main");
  };

  const CancelCase = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bus number: {busNumber}</Text>
      <Text style={styles.text}>System: {selectedSystem}</Text>
      <Text style={styles.text}>Position: {systemPosition}</Text>
      <Text style={styles.text}>Options: {systemOption}</Text>
      <Text style={styles.text}>
        Location: {busLocation.long} {busLocation.lat}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: caseFotos,
        }}
      />
      <Text style={styles.text}>Description: {caseDescription}</Text>
      <View style={styles.buttonsContainer}>
        <Button color="red" title="Cancel" onPress={CancelCase} />
        <Button title="submit" onPress={sendCase} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
