import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useStateValue } from "../store/StateProvider";
import CustomButton from "../components/CustomButton";

export default function Positions({ navigation }) {
  const [{ busSystem }, dispatch] = useStateValue();

  function addBusPosition(position) {
    dispatch({
      type: "ADD_Bus_Position",
      position: position,
    });
    navigation.navigate("Optionen");
  }

  return (
    <View style={styles.container}>
      {busSystem["positions"].map((position, index) => (
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
