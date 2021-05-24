import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import axios from "axios";
import uuid from "react-native-uuid";

export default function MoreInfosUnfallMeldung({ navigation, route }) {
  const { unfall } = route.params;
  const [description, setDescription] = useState([]);
  const [busNumber, setBusNumber] = useState([]);
  const [unfallCount, setUnfallCount] = useState();

  useEffect(() => {
    axios
      .get("https://yq6v0zve20.execute-api.eu-central-1.amazonaws.com/items")
      .then((resp) => {
        setUnfallCount(resp.data.Count);
      });
  }, []);

  const sendUnfall = () => {
    axios.put(
      "https://yq6v0zve20.execute-api.eu-central-1.amazonaws.com/items",
      {
        id: uuid.v4(),
        busNumber: busNumber,
        timestamp: Math.round(new Date().getTime() / 1000),
        unfallNumber: unfallCount + 1,
        description: description,
        driver: {
          name: "Majd Sufyan",
          email: "majd2@gmail.com",
        },
        company: "AutobusOberbayern",
        location: {
          street: "Am OberWiesendFeld",
          city: "Munich",
        },
        fotos: [
          "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        ],
      }
    );
    alert("Der Unfall wurde erfolgreich gesendet");
    navigation.navigate("Main");
  };

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
        Fügen Sie die Busnummer hinzu
      </Text>
      <TextInput
        style={[styles.input, { width: "90%" }]}
        onChangeText={(event) => setBusNumber(event)}
      />
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

      <View
        style={{
          textAlign: "center",
          backgroundColor: "#FEF4C0",
          width: "90%",
          borderRadius: 10,
        }}
      ></View>

      {description.length == 0 ? (
        <View
          onClick={sendUnfall}
          activeOpacity={1}
          style={[
            styles.button,
            { backgroundColor: "grey", textAlign: "center" },
          ]}
        >
          <Text style={styles.text}>Senden</Text>
        </View>
      ) : (
        <View
          onClick={sendUnfall}
          style={[
            styles.button,
            { backgroundColor: "red", textAlign: "center" },
          ]}
        >
          <Text style={styles.text}>Senden</Text>
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
