import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HighlightedEvent = () => {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.textSection}>
        <Text style={styles.eventTitle}>Career Conference</Text>
        <Text style={styles.eventSubtitle}>Treat yourself with knowledge</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Event</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../../assets/Event/1.png")} // Replace with actual event image
        style={styles.eventImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: "row",
    backgroundColor: "#F8FAFF", // Light background like the image
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 3, // Shadow effect for a clean card look
  },
  textSection: {
    flex: 1,
    paddingRight: 10, // Space between text and image
  },
  eventTitle: {
    fontSize: 16,
    color: "#FF4A4A", // Red color for "Career Conference"
    fontWeight: "600",
    marginBottom: 5,
  },
  eventSubtitle: {
    fontSize: 14,
    color: "#000", // Black for the subtitle
    marginBottom: 15,
  },
  joinButton: {
    backgroundColor: "#34C759", // Green background for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  joinButtonText: {
    color: "#fff", // White text color for the button
    fontWeight: "bold",
  },
  eventImage: {
    width: 100, // Adjusted image width based on the example
    height: 100,
    borderRadius: 10,
  },
});

export default HighlightedEvent;
