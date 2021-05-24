import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import CustomCase from "../components/CustomCase";
import { Octicons } from "@expo/vector-icons";

export default function MyCases({ navigation }) {
  const [userCases, setUserCases] = useState([]);

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
      .get("https://cok1u6cvtf.execute-api.eu-central-1.amazonaws.com/items")
      .then((resp) => {
        setUserCases(
          resp.data.Items.filter((x) => x.driver.email == "majd2@gmail.com")
        );
      });
  }, []);

  const openSingleCase = (singleCase, index) => {
    navigation.navigate("SinglePage", {
      item: singleCase,
      index: index,
    });
  };

  return (
    <View style={styles.container}>
      {userCases?.length > 0 ? (
        userCases.map((singleCase, index) => (
          <View
            key={index}
            style={styles.CaseContainer}
            onClick={() => openSingleCase(singleCase, index)}
          >
            <CustomCase
              caseNumber={singleCase.caseNumber}
              done={singleCase.done}
              description={singleCase.description}
              busNumber={singleCase.busNumber}
              busSystem={singleCase.busSystems.system}
              timestamp={singleCase.timestamp}
            />
          </View>
        ))
      ) : (
        <Text style={styles.text}>Sie haben noch keine Technikmeldung!</Text>
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
