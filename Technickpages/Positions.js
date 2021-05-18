import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Positions({ navigation, route }) {
  const { busNumber, busSystem, systemOptions, systemPositions } = route.params;

  function addBusPosition(position) {
    navigation.navigate("Optionen", {
      busNumber: busNumber,
      busSystem: busSystem,
      position: position,
      systemOptions: systemOptions,
    });
  }

  return (
    <View style={styles.container}>
      {systemPositions.map((position, index) => (
        <View key={index} onClick={() => addBusPosition(position)}>
          <CustomButton color="#7eca9c" title={position} />
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
