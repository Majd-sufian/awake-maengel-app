import React from "react";
import { StyleSheet, View } from "react-native";
import { useStateValue } from "../store/StateProvider";
import CustomButton from "../components/CustomButton";

export default function Options({ navigation }) {
  const [{ busSystem }, dispatch] = useStateValue();

  function addBusOption(option) {
    dispatch({
      type: "ADD_Bus_Option",
      option: option,
    });
    navigation.navigate("MoreInfos");
  }

  return (
    <View style={styles.container}>
      {busSystem["options"].map((option, index) => (
        <View key={index} onClick={() => addBusOption(option)}>
          <CustomButton title={option} />
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
