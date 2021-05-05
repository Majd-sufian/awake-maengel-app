import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { useStateValue } from "../store/StateProvider";

export default function BusNumber({ navigation }) {
  const [{}, dispatch] = useStateValue();
  const [num, setNumber] = useState();

  function addBusNum() {
    dispatch({
      type: "ADD_Bus_Num",
      number: num,
    });
    navigation.navigate("Please select a system");
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(event) => setNumber(event)}
        autoFocus={true}
      />

      <View
        onClick={addBusNum}
        activeOpacity={1}
        style={[styles.button, { backgroundColor: "red" }]}
      >
        <Text style={styles.text}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
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
