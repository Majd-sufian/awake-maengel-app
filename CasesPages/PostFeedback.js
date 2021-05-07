import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import axios from "axios";

export default function PostFeedback({ navigation, route }) {
  const [feedback, setFeedback] = useState([]);
  const { item } = route.params;

  const addMoreInfos = () => {
    const allFeedbacks = item.feedbacks;
    allFeedbacks.push({
      feedback: feedback,
      sender: {
        email: "workshop@gmail.com",
        username: "Majd",
      },
      timestamp: "1619707512",
    });

    axios.put(
      "https://5brtqhkajh.execute-api.eu-central-1.amazonaws.com/items",
      {
        id: item.id,
        busNumber: item.busNumber,
        busSystems: {
          system: item.busSystems.system,
          position: item.busSystems.position,
          option: item.busSystems.options,
        },
        description: item.description,
        done: true,
        driver: {
          name: item.driver.name,
          email: item.driver.email,
        },
        location: {
          lan: item.location.lan,
          long: item.location.long,
        },
        fotos: item.fotos,
        feedbacks: allFeedbacks,
      }
    );

    alert("Your Feedback was successfully posted");
    location.reload();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(event) => setFeedback(event)}
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
