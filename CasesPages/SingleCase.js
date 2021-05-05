import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function SingleCase({ navigation, route }) {
  const { item, itemIndex } = route.params;

  const addFeedback = () => {
    navigation.navigate("PostFeedback", {
      item: item,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bus number: {item.busNumber}</Text>
      <Text style={styles.text}>System: {item.busSystems.system}</Text>
      <Text style={styles.text}>Position: {item.busSystems.position}</Text>
      <Text style={styles.text}>Options: {item.busSystems.option}</Text>
      <Text style={styles.text}>
        Location: {item.location.long} {item.location.lan}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.fotos,
        }}
      />
      <Text style={styles.text}>Description: {item.description}</Text>

      <Text>------------------------------------------------</Text>
      <Text onClick={addFeedback} style={{ fontSize: 30 }}>
        Feedbacks:
      </Text>
      <View>
        {item.feedbacks.map((feedback, index) => (
          <View key={index}>
            <Text style={{ marginBottom: 10, fontSize: 20 }}>
              {feedback.sender.username}: {feedback.feedback}
            </Text>
          </View>
        ))}
      </View>

      <Button
        onClick={() => console.log("ddd")}
        color="red"
        title="Add Feedback 2"
      />
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
