import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function UnfallMeldung({ navigation }) {
  const busSystems = ["Vorfindeschaden", "Eigenschaden", "Fremdschaden"];
  return (
    <View style={styles.container}>
      {busSystems.map((system, index) => (
        <View
          activeOpacity={1}
          key={index}
          onClick={() => navigation.navigate("Unfall")}
        >
          <CustomButton title={system} color="red" />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: 20,
  },
});
