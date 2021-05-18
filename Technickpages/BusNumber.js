import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default function BusNumber({ navigation }) {
  const [num, setNumber] = useState([]);

  function addBusNum() {
    navigation.navigate("Bitte wählen Sie ein System", {
      busNumber: num,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: "center", marginBottom: 20 }}>
        Fügen Sie die Busnummer hinzu
      </Text>
      <TextInput
        style={[styles.input, { width: "90%" }]}
        onChangeText={(event) => setNumber(event)}
        autoFocus={true}
      />

      {num.length == 0 ? (
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
          onClick={addBusNum}
          activeOpacity={1}
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
  input: {
    height: 40,
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
