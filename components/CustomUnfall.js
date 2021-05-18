import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function CustomUnfall({ unfallNumber, busNumber, timestamp }) {
  const dateObject = new Date(timestamp * 1000);

  const humanDateFormat = dateObject.toLocaleString();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25, marginBottom: 10 }}>
          {unfallNumber} - Bus {busNumber}
        </Text>
      </View>
      <Text style={{ fontSize: 16 }}>Datum: {humanDateFormat}</Text>
    </>
  );
}

const styles = StyleSheet.create({});
