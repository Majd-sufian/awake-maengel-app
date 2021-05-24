import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import CustomUnfall from "../components/CustomUnfall";
import { Octicons } from "@expo/vector-icons";

export default function Unfälle({ navigation }) {
  const [unfaelle, setUnfaelle] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            left: 20,
          }}
          onClick={() => navigation.openDrawer()}
        >
          <Octicons name="three-bars" size={24} color="black" />
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    axios
      .get("https://yq6v0zve20.execute-api.eu-central-1.amazonaws.com/items")
      .then((resp) => {
        setUnfaelle(resp.data.Items);
      });
  }, []);

  const openUnfall = (singleUnfall) => {
    navigation.navigate("SingleUnfall", {
      item: singleUnfall,
    });
    // navigation.navigate("SingleUnfall", {
    //   item: singleUnfall,
    // });
  };

  console.log(unfaelle);

  return (
    <View style={styles.container}>
      {unfaelle?.length > 0 ? (
        unfaelle.map((singleUnfall, index) => (
          <View
            key={index}
            style={styles.CaseContainer}
            onClick={() => openUnfall(singleUnfall)}
          >
            <CustomUnfall
              unfallNumber={singleUnfall.unfallNumber}
              busNumber={singleUnfall.busNumber}
              timestamp={singleUnfall.timestamp}
              unfall={singleUnfall.unfall}
            />
          </View>
        ))
      ) : (
        <Text style={styles.text}>Sie haben noch keine Unfallmeldung!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  CaseContainer: {
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 23,
    position: "relative",
    textAlign: "center",
    top: 300,
  },
});
