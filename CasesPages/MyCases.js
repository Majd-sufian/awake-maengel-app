import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import CustomCase from "../components/CustomCase";
import { Octicons } from "@expo/vector-icons";

export default function MyCases({ navigation }) {
  const [userCases, setUserCases] = useState([]);

  useEffect(() => {
    axios
      .get("https://5brtqhkajh.execute-api.eu-central-1.amazonaws.com/items")
      .then((resp) => {
        setUserCases(
          resp.data.Items.filter((x) => x.driver.email == "majd2@gmail.com")
        );
      });
  }, []);

  const openSingleCase = (singleCase, index) => {
    navigation.navigate("SinglePage", {
      item: singleCase,
      itemIndex: index,
    });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Octicons
          onClick={() => navigation.openDrawer()}
          name="three-bars"
          size={24}
          color="black"
        />
        <Text style={{ fontSize: 20 }}>Your Cases</Text>
        <Text style={{ fontSize: 10 }}>‎</Text>
      </View>
      {userCases.length > 0 ? (
        userCases.map((singleCase, index) => (
          <View
            key={index}
            style={styles.CaseContainer}
            onClick={() => openSingleCase(singleCase, index)}
          >
            <CustomCase
              index={index}
              done={singleCase.done}
              description={singleCase.description}
            />
          </View>
        ))
      ) : (
        <Text style={styles.text}>You Don't have any cases yet!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  CaseContainer: {
    marginTop: 20,
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
