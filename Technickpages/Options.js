import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Options({ navigation, route }) {
  const { busNumber, busSystem, systemOptions, position } = route.params;

  function addBusOption(option) {
    navigation.navigate("Add More Infos", {
      busNumber: busNumber,
      busSystem: busSystem,
      position: position,
      option: option,
    });
  }

  return (
    <View style={styles.container}>
      {systemOptions.map((option, index) => (
        <View key={index} onClick={() => addBusOption(option)}>
          <CustomButton title={option} color="#7eca9c" />
        </View>
      ))}
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
});
