<View style={styles.container}>
  <Text style={styles.text}>Bus number: {busNumber}</Text>
  <Text style={styles.text}>System: {selectedSystem}</Text>
  <Text style={styles.text}>Position: {systemPosition}</Text>
  <Text style={styles.text}>Options: {systemOption}</Text>
  <Text style={styles.text}>
    Location: {busLocation.long} {busLocation.lat}
  </Text>
  <Image
    style={styles.tinyLogo}
    source={{
      uri: caseFotos,
    }}
  />
  <Text style={styles.text}>Description: {caseDescription}</Text>
  <View style={styles.buttonsContainer}>
    <Button color="red" title="Cancel" onPress={CancelCase} />
    <Button title="submit" onPress={sendCase} />
  </View>
</View>;
