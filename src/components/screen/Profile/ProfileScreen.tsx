import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
// import ContactScreen from "../Contact/ContactUsScreen"; // Import the ContactScreen component

const profileOptions = [
  { id: "1", label: "Settings", icon: "settings-outline" },
  { id: "2", label: "Portfolio Build", icon: "clipboard-outline" },
  { id: "3", label: "Address", icon: "location-outline" },
  { id: "4", label: "Change Password", icon: "lock-outline" },
  { id: "5", label: "Contact Us", icon: "call-outline" }, // This will open ContactScreen modal
  { id: "6", label: "Help & Support", icon: "help-circle" },
  { id: "7", label: "Log out", icon: "log-out" },
];

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderProfileOption = ({ item }: any) => {
    const handleOptionPress = () => {
      if (item.label === "Contact Us") {
        setModalVisible(true); // Show the contact form modal
      } else {
        // Handle other options here
        console.log(`${item.label} clicked`);
      }
    };

    return (
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleOptionPress}
      >
        <View style={styles.optionContent}>
          <Ionicons name={item.icon} size={24} color="#333" />
          <Text style={styles.optionText}>{item.label}</Text>
        </View>
        <Feather name="chevron-right" size={24} color="#333" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={require("../../../../assets/profile.png")} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Guest</Text>
        <Text style={styles.profileUsername}>@guest</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Options List */}
      <FlatList
        data={profileOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderProfileOption}
        style={styles.optionsList}
      />

      {/* Render Contact Screen Modal */}
      {/* <ContactScreen
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFF",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#333",
  },
  profileInfo: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#FFF",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileUsername: {
    fontSize: 14,
    color: "#999",
    marginBottom: 15,
  },
  editProfileButton: {
    backgroundColor: "#333",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  editProfileText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  optionsList: {
    marginTop: 10,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    marginBottom: 2,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});

export default ProfileScreen;
