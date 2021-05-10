import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import axios from "axios";

export default function PostFeedback({ navigation, route }) {
  const [feedback, setFeedback] = useState([]);
  const { item } = route.params;

  const addMoreInfos = () => {
    const newFeedback = {
      feedback: feedback,
      sender: {
        email: "workshop@gmail.com",
        username: "Majd",
      },
      timestamp: Math.round(new Date().getTime() / 1000),
    };

    let allFeedbacks = [];

    if (item.feedbacks) {
      allFeedbacks = item.feedbacks;
      allFeedbacks.push(newFeedback);
    } else {
      allFeedbacks.push(newFeedback);
    }

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
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 5,
          margin: 10,
        }}
      >
        Write a Feedback
      </Text>
      <TextInput
        style={[styles.input, { width: "90%" }]}
        onChangeText={(event) => setFeedback(event)}
        numberOfLines={4}
      />

      <View
        style={{
          textAlign: "center",
          backgroundColor: "#FEF4C0",
          width: "90%",
          borderRadius: 10,
        }}
      ></View>

      {feedback.length == 0 ? (
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
