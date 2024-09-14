import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import ContactScreen from "./Contact/ContactScreen";
import { ProfileContext } from "./Edit/ProfileContext";

interface ProfileOption {
  id: string;
  label: string;
  icon: string;
}

interface ProfileScreenProps {
  navigation: any;
}

const profileOptions: ProfileOption[] = [
  { id: "1", label: "Settings", icon: "settings-outline" },
  { id: "2", label: "Portfolio Build", icon: "clipboard-outline" },
  { id: "3", label: "Membership", icon: "card-outline" },
  { id: "4", label: "Contact Us", icon: "call-outline" },
  { id: "5", label: "Help & Support", icon: "help-circle" },
  { id: "6", label: "Log out", icon: "log-out" },
];

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const { profileName, setProfileName } = useContext(ProfileContext);

  const handleOptionPress = (label: string) => {
    if (label === "Contact Us") {
      setModalVisible(true);
    } else if (label === "Edit Profile") {
      setNewName(profileName);
      setEditModalVisible(true);
    } else if (label === "Settings") {
      navigation.navigate("SettingsScreen");
    } else if (label === "Portfolio Build") {
      navigation.navigate("PortfolioScreen");
    } else if (label === "Membership") {
      navigation.navigate("MembershipScreen");
    } else {
      console.log(`${label} clicked`);
    }
  };

  const handleSaveProfile = () => {
    setProfileName(newName);
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={require("../../../../assets/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{profileName}</Text>
        <Text style={styles.profileUsername}>@guest</Text>
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => setEditModalVisible(true)}
        >
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Options List */}
      <FlatList
        data={profileOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionPress(item.label)}
          >
            <View style={styles.optionContent}>
              <Ionicons name={item.icon} size={24} color="#333" />
              <Text style={styles.optionText}>{item.label}</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#333" />
          </TouchableOpacity>
        )}
        style={styles.optionsList}
      />

      {/* Render Contact Screen Modal */}
      <ContactScreen
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      {/* Edit Profile Modal */}
      <Modal visible={isEditModalVisible} transparent animationType="slide">
        <View style={styles.editModalContainer}>
          <View style={styles.editModalContent}>
            <Text style={styles.editModalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.editInput}
              placeholder="Enter new name"
              value={newName}
              onChangeText={setNewName}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveProfile}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setEditModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  editModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  editModalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  editModalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  editInput: {
    width: "100%",
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
