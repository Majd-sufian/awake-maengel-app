import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BusNumber from "./BusNumber";
import axios from "axios";
import uuid from "react-native-uuid";

export default function OverView({ navigation, route }) {
  const {
    busNumber,
    busSystem,
    position,
    option,
    location,
    description,
  } = route.params;

  const [casesCount, setCasesCount] = useState();

  useEffect(() => {
    axios
      .get("https://cok1u6cvtf.execute-api.eu-central-1.amazonaws.com/items")
      .then((resp) => {
        setCasesCount(resp.data.Count);
      });
  }, []);

  const sendCase = () => {
    axios.put(
      "https://cok1u6cvtf.execute-api.eu-central-1.amazonaws.com/items",
      {
        id: uuid.v4(),
        busNumber: busNumber,
        timestamp: Math.round(new Date().getTime() / 1000),
        caseNumber: casesCount + 1,
        busSystems: {
          system: selectedSystem,
          position: systemPosition,
          option: systemOption,
        },
        description: caseDescription,
        done: false,
        driver: {
          name: "Majd Sufyan",
          email: "majd2@gmail.com",
        },
        location: {
          lan: busLocation.lat,
          long: busLocation.long,
        },
        fotos:
          "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
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
      <Text style={styles.text}>System: {busSystem}</Text>
      {position ? <Text style={styles.text}>Position: {position}</Text> : <></>}
      {option ? <Text style={styles.text}>Option: {option}</Text> : <></>}
      <Text style={styles.text}>Straße: Am Oberwiesendfeld 17</Text>
      <Text style={styles.text}>Stadt: Munich</Text>
      <Text style={styles.text}>Staat: Bayern</Text>
      <Text style={styles.text}>Land: Germany</Text>
      <Text style={styles.text}>Postleitzahl: 80809</Text>
      {description ? (
        <Text style={styles.text}>Beschreibung: {description}</Text>
      ) : (
        <></>
      )}
      <View style={styles.images}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          }}
        />
      </View>
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
    width: 100,
    height: 100,
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
  images: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
