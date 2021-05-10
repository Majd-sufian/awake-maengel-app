import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

export default function MoreInfosUnfallMeldung({ navigation, route }) {
  const [description, setDescription] = useState([]);

  async function addMoreInfos() {
    alert("We need to use your current location");
    navigation.navigate("Main");
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
        Add more description about the Unfall
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
          Please Notice that your location will be shared!
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
