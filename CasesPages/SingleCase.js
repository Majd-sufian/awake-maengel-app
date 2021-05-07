import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function SingleCase({ navigation, route }) {
  const { item, index } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Case ${index + 1}`,
    });
  }, [navigation]);

  const addFeedback = () => {
    navigation.navigate("PostFeedback", {
      item: item,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bus number: {item.busNumber}</Text>
      <Text style={styles.text}>System: {item?.busSystems?.system}</Text>
      <Text style={styles.text}>Options: {item.busSystems.option}</Text>
      {item?.busSystems?.position ? (
        <Text style={styles.text}>Position: {item.busSystems.position}</Text>
      ) : (
        <></>
      )}
      <Text style={styles.text}>Address: Am OberwiesendFeld</Text>
      <Text style={styles.text}>City: Munich</Text>
      <Text style={styles.text}>State: Bayern</Text>
      <Text style={styles.text}>Country: Germany</Text>
      <Text style={styles.text}>Postal Code: 80809</Text>
      {item?.description ? (
        <Text style={styles.text}>Description: {item.description}</Text>
      ) : (
        <></>
      )}
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

      {item?.feedbacks ? <Text>GGGGG</Text> : <></>}
    </View>
  );
}

// const view = {
// <Text>------------------------------------------------</Text>
//   <Text onClick={addFeedback} style={{ fontSize: 30 }}>
//   Feedbacks:
// </Text>
// <View>
//   {item.feedbacks.map((feedback, index) => (
//     <View key={index}>
//       <Text style={{ marginBottom: 10, fontSize: 20 }}>
//         {feedback.sender.username}: {feedback.feedback}
//       </Text>
//     </View>
//   ))}
// </View>
// }

// function displayFeedbacks() {
//   return
// }
// const displayFeedbacks = () => {
//   <View>
//   {item.feedbacks.map((feedback, index) => (
//     <View key={index}>
//       <Text style={{ marginBottom: 10, fontSize: 20 }}>
//         {feedback.sender.username}: {feedback.feedback}
//       </Text>
//     </View>
//   ))}
// </View>
// }

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
    fontSize: 20,
    marginBottom: 20,
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
