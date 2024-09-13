import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation }: any) => {
  return (
    <View style={styles.header}>
      {/* User Profile */}
      <View style={styles.userInfo}>
        <Image
          source={require("../../../../assets/profile.png")} // Add profile image
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.userName}>Guest</Text>
        </View>
      </View>

      {/* Notification Icon */}
      <TouchableOpacity onPress={() => alert("Notification clicked!")}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2E5EAA",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    color: "#fff",
    fontSize: 14,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
