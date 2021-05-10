import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomButton({ title, key, color }) {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text key={key} style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    margin: 16,
    marginBottom: 2,
    width: 300,
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
