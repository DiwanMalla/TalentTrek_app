import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PaymentCancelScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment Canceled</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default PaymentCancelScreen;
