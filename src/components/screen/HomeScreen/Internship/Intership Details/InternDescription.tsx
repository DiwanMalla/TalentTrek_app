import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Description = ({ job_highlight }: any) => {
  // Safely access properties with optional chaining
  const {
    Benefits = [],
    Responsibilities = [],
    Qualifications = [],
  } = job_highlight || {};

  return (
    <View>
      {/* Requirements */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Requirements:</Text>
        {Qualifications.length > 0 ? (
          Qualifications.map((qualification, index) => (
            <Text key={index} style={styles.cardText}>
              • {qualification}
            </Text>
          ))
        ) : (
          <Text style={styles.cardText}>
            No specific qualifications listed.
          </Text>
        )}
      </View>

      {/* Benefits */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Benefits:</Text>
        {Benefits.length > 0 ? (
          Benefits.map((benefit, index) => (
            <Text key={index} style={styles.cardText}>
              • {benefit}
            </Text>
          ))
        ) : (
          <Text style={styles.cardText}>No benefits listed.</Text>
        )}
      </View>

      {/* Responsibilities */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Responsibilities:</Text>
        {Responsibilities.length > 0 ? (
          Responsibilities.map((responsibility, index) => (
            <Text key={index} style={styles.cardText}>
              • {responsibility}
            </Text>
          ))
        ) : (
          <Text style={styles.cardText}>No responsibilities listed.</Text>
        )}
      </View>
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

export default Description;
