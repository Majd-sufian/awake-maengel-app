import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { useStateValue } from "../store/StateProvider";

export default function BusNumber({ navigation }) {
  const [{}, dispatch] = useStateValue();
  const [num, setNumber] = useState([]);

  function addBusNum() {
    dispatch({
      type: "ADD_Bus_Num",
      number: num,
    });
    navigation.navigate("Please select a system");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: "center", marginBottom: 20 }}>
        ADD YOUR BUS NUMBER
      </Text>
      <TextInput
        style={[styles.input, { width: "90%" }]}
        onChangeText={(event) => setNumber(event)}
        autoFocus={true}
      />

      {num.length == 0 ? (
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
          onClick={addBusNum}
          activeOpacity={1}
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
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
