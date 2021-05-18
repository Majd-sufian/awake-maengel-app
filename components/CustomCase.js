import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function CustomCase({
  navigation,
  done,
  caseNumber,
  busNumber,
  busSystem,
  timestamp,
}) {
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
          {caseNumber} - Bus {busNumber} - {busSystem}
        </Text>
        {done ? (
          <Feather
            style={{ textAlign: "center", alignContent: "center " }}
            name="check-circle"
            size={24}
            color="#16c79a"
          />
        ) : (
          <FontAwesome
            style={{ textAlign: "center", alignContent: "center " }}
            name="times-circle"
            size={24}
            color="#fb3640"
          />
        )}
      </View>
      <Text style={{ fontSize: 16 }}>Datum: {humanDateFormat}</Text>
    </>
  );
}

const styles = StyleSheet.create({});
