import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Systems({ navigation, route }) {
  const { busNumber } = route.params;
  const [busSystems, setBusSystems] = useState([]);
  const [busData, setBusData] = useState([]);
  const [errors, setErrors] = useState(0);

  async function fetchDataJSON() {
    const response = await fetch(
      `https://etk4sn8126.execute-api.eu-central-1.amazonaws.com/items/${busNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Item) {
          const keys = Object.keys(data.Item.systems);
          setBusSystems(keys);
          setBusData(data.Item.systems);
        } else {
          setErrors(1);
        }
      });
  }

  const addBusSystem = (e) => {
    const selectedSystem = e.target.innerText;
    const systemOptions = busData[selectedSystem]["options"];

    if (systemOptions.length == 0) {
      navigation.navigate("Add More Infos", {
        busNumber: busNumber,
        busSystem: selectedSystem,
      });
    } else {
      const systemPositions = busData[selectedSystem]["positions"];
      if (systemPositions.length == 0) {
        navigation.navigate("Optionen", {
          busNumber: busNumber,
          busSystem: selectedSystem,
          systemOptions: systemOptions,
        });
      } else {
        navigation.navigate("Positionen", {
          busNumber: busNumber,
          busSystem: selectedSystem,
          systemPositions: systemPositions,
          systemOptions: systemOptions,
        });
      }
    }
  };

  useEffect(() => {
    fetchDataJSON();
  }, []);

  return (
    <View style={styles.container}>
      {errors == 0 ? (
        busSystems.map((system, index) => (
          <View activeOpacity={1} key={index} onClick={addBusSystem}>
            <CustomButton
              onClick={addBusSystem}
              title={system}
              color="#7eca9c"
            />
          </View>
        ))
      ) : (
        <View>
          <Text style={{ fontSize: 25, textAlign: "center", margin: 50 }}>
            Es gibt keinen Bus mit dieser Nummer
          </Text>
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
    marginBottom: 20,
  },
  noSystems: {},
});
