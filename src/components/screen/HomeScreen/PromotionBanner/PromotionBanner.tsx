import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const PromotionBanner = () => {
  const [email, setEmail] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0
  const scaleAnim = useRef(new Animated.Value(0.95)).current; // Initial scale is 0.95

  // Animation effect
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleAnim, {
      toValue: 1, // Final scale
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, scaleAnim]);

  const handleSubscribe = () => {
    // Handle email subscription logic here
    Alert.alert("Subscribed:", email);
    setEmail(""); // Clear input after subscription
  };

  return (
    <Animated.View
      style={[
        styles.banner,
        { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
      ]}
    >
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    backgroundColor: "#4a90e2", // Updated color to match modern design
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "85%",
    padding: 12,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#ff5722", // Updated button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PromotionBanner;
