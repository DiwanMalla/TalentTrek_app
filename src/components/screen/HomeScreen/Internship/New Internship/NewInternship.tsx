import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NewInternship = () => {
  return (
    <View style={styles.internshipContainer}>
      {/* This View wraps the title and the 'See All' text in a row */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>New Internship</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.internshipCard}>
        <Image
          style={styles.companyLogo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
          }} // Replace with actual logo URL
        />
        <View style={styles.internshipDetails}>
          <Text style={styles.internshipTitle}>Product Manager Intern</Text>
          <Text style={styles.companyName}>Slack</Text>
          <Text style={styles.location}>Silicon Valley</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  internshipContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#32CD32",
    fontWeight: "600",
  },
  internshipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  companyLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  internshipDetails: {
    flex: 1,
  },
  internshipTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  companyName: {
    color: "#888",
    fontSize: 14,
  },
  location: {
    color: "#888",
    fontSize: 12,
  },
});

export default NewInternship;
