import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EventItem from "./EventItem"; // Adjust path if necessary

const eventsData = [
  {
    id: "1",
    title: "Career Conference",
    description: "Treat yourself with knowledge",
    buttonLabel: "Join Event",
    buttonColor: "#32CD32",
    image: require("../../../../assets/Event/1.png"), // Placeholder for person image
    backgroundColor: "#F0F8FF", // Card background color (light blue)
    titleColor: "#FF5C5C", // Title color (red)
  },
  {
    id: "2",
    title: "Mentoring Session",
    description: "How to Build Perfect Portfolio",
    buttonLabel: "Join Event",
    buttonColor: "#4E9FFF",
    image: require("../../../../assets/Event/1.png"), // Placeholder for person image
    backgroundColor: "#E6F0FA", // Card background color (light blue-gray)
    titleColor: "#FFA500", // Title color (orange)
  },
  {
    id: "3",
    title: "Sharing Session",
    description: "Design Thinking for Innovation",
    buttonLabel: "Join Event",
    buttonColor: "#32CD32",
    image: require("../../../../assets/Event/1.png"), // Placeholder for person image
    backgroundColor: "#F0F8FF", // Card background color
    titleColor: "#32CD32", // Title color (green)
  },
];

const EventsScreen = () => {
  const handleNotificationPress = () => {
    Alert.alert("Notifications", "You have new notifications!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Growth Event</Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          onPress={handleNotificationPress}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Find Expert Class.."
          placeholderTextColor="#999"
        />
      </View>

      {/* Event List */}
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventItem event={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 2,
    borderColor: "#fff",
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 10,
    color: "#333",
  },
});

export default EventsScreen;
