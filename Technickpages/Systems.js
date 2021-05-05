import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useStateValue } from "../store/StateProvider";
import CustomButton from "../components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";

export default function Systems({ navigation }) {
  const [{ busNumber }, dispatch] = useStateValue();
  const [busSystems, setBusSystems] = useState([]);
  const [busData, setBusData] = useState([]);

  async function fetchDataJSON() {
    const response = await fetch(
      `https://etk4sn8126.execute-api.eu-central-1.amazonaws.com/items/${busNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBusSystems(data.Item.all_systems);
        setBusData(data.Item.systems);
      });
  }

  const addBusSystem = (e) => {
    const selectedSystem = e.target.innerText;
    const sub = busData[selectedSystem].sub;
    const system = busData[selectedSystem];

    dispatch({
      type: "ADD_Bus_System",
      system: system,
      selectedSystem: selectedSystem,
    });

    if (sub) {
      navigation.navigate("Positions");
    } else {
      navigation.navigate("Options");
    }
  };

  useEffect(() => {
    fetchDataJSON();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {busSystems.map((system, index) => (
          <View activeOpacity={1} key={index} onClick={addBusSystem}>
            <CustomButton onClick={addBusSystem} title={system} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: 20,
  },
});
