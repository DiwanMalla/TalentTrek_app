import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

const EventItem = ({ event }) => {
  const handleJoinPress = () => {
    Alert.alert("Event Joined", `You have joined the ${event.title} event!`);
  };

  return (
    <View
      style={[styles.eventCard, { backgroundColor: event.backgroundColor }]}
    >
      <View style={styles.eventContent}>
        {/* Title */}
        <Text style={[styles.eventTitle, { color: event.titleColor }]}>
          {event.title}
        </Text>

        {/* Description */}
        <Text style={styles.eventDescription}>{event.description}</Text>

        {/* Button */}
        <TouchableOpacity
          style={[styles.joinButton, { backgroundColor: event.buttonColor }]}
          onPress={handleJoinPress}
        >
          <Text style={styles.joinButtonText}>{event.buttonLabel}</Text>
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image source={event.image} style={styles.eventImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  eventContent: {
    flex: 1,
    paddingRight: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  joinButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  joinButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});

export default EventItem;
