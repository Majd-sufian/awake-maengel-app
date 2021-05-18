import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";

export default function Main({ navigation }) {
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

  return (
    <SafeAreaView style={styles.container}>
      <View
        activeOpacity={1}
        style={[styles.button, { backgroundColor: "#2978b5" }]}
      >
        <Text
          onClick={() => navigation.navigate("Bus Number")}
          style={styles.text}
        >
          Tecknikmeldung
        </Text>
      </View>
      <View
        activeOpacity={1}
        style={[styles.button, { backgroundColor: "red" }]}
      >
        <Text
          onClick={() => navigation.navigate("UnfallMeldung")}
          style={styles.text}
        >
          Unfallmeldung
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
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
