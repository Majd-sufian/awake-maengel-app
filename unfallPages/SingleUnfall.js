import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function SingleUnfall({ navigation, route }) {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Unfall ${item.unfallNumber}`,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {item?.fotos ? (
        <View style={styles.images}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                "https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            }}
          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            }}
          />
        </View>
      ) : (
        <></>
      )}
      <Text style={styles.text}>Bus number: {item.busNumber}</Text>
      <Text style={styles.text}>Straße: Am Oberwiesendfeld 17</Text>
      <Text style={styles.text}>Stadt: Munich</Text>
      <Text style={styles.text}>Staat: Bayern</Text>
      <Text style={styles.text}>Land: Germany</Text>
      <Text style={styles.text}>Postleitzahl: 80809</Text>
      {item?.description ? (
        <Text style={styles.text}>Beschreibung: {item.description}</Text>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
