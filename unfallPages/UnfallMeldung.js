import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function UnfallMeldung({ navigation }) {
  const busSystems = ["Vorfindeschaden", "Eigenschaden", "Fremdschaden"];

  function moreInfoUnfall(unfall) {
    navigation.navigate("MoreInfosUnfallMeldung", {
      unfall: unfall,
    });
  }
  return (
    <View style={styles.container}>
      {busSystems.map((unfall, index) => (
        <View
          activeOpacity={1}
          key={index}
          onClick={() => moreInfoUnfall(unfall)}
        >
          <CustomButton title={unfall} color="red" />
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
