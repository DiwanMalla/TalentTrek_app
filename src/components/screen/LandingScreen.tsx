// LandingPage.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const LandingPage: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Top section with title */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Find <Text style={styles.highlight}>Dream </Text>
        </Text>
        <Text style={styles.title}>
          <Text style={styles.highlight}>Internship</Text> Program
        </Text>
      </View>

      {/* Image Section */}
      <Image
        source={require("../../../assets/loading.jpg")} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Subtitle section */}
      <Text style={styles.subtitle}>
        Challenge yourself towards your future dream job and get bunch of
        benefits
      </Text>

      {/* Button Section */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's Begin</Text>
      </TouchableOpacity>

      {/* Footer Note */}
      <Text style={styles.footer}>
        This app is for a class assignment and not for commercial purposes.
      </Text>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  header: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a1a1a",
  },
  highlight: {
    color: "green",
  },
  image: {
    width: "80%",
    height: 200,
  },
  subtitle: {
    fontSize: 16,
    color: "#7d7d7d",
    textAlign: "center",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    fontSize: 12,
    color: "#7d7d7d",
    textAlign: "center",
    marginBottom: 20,
  },
});
