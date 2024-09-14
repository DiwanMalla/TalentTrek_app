import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PromotionBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle email subscription logic here
    console.log("Subscribed:", email);
    setEmail(""); // Clear input after subscription
  };

  return (
    <View style={styles.banner}>
      <Text style={styles.title}>Join Our Newsletter!</Text>
      <Text style={styles.subtitle}>
        Stay updated with the latest promotions and events.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginVertical: 10,
  },
  input: {
    width: "80%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PromotionBanner;
