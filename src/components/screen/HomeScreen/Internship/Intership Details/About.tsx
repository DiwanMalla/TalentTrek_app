// components/AboutCompany.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = ({ job_description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>About the Job:</Text>
      <Text style={styles.cardText}>{job_description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F8FAFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default About;
