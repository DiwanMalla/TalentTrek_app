// SettingsScreen.tsx
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import { ProfileContext } from "../Edit/ProfileContext";
import ChangePasswordModal from "./Setting Tab/ChangePasswordModal";

const SettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const { profileName, setProfileName } = useContext(ProfileContext);

  const handleSavePassword = (newPassword: string, confirmPassword: string) => {
    if (newPassword === confirmPassword) {
      Alert.alert("Password changed successfully");
    } else {
      Alert.alert("Passwords do not match");
    }
  };

  const handleOptionPress = (option: string) => {
    if (option === "Change Password") {
      setChangePasswordModalVisible(true);
    } else {
      console.log(`${option} clicked`);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      {/* Settings Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerTitle, isDarkMode && styles.darkModeText]}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>

      {/* Settings Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionContainer, isDarkMode && styles.darkModeOption]}
          onPress={() => handleOptionPress("Change Password")}
        >
          <Text style={[styles.optionText, isDarkMode && styles.darkModeText]}>
            Change Password
          </Text>
        </TouchableOpacity>
        <View
          style={[styles.optionContainer, isDarkMode && styles.darkModeOption]}
        >
          <Text style={[styles.optionText, isDarkMode && styles.darkModeText]}>
            Notifications
          </Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ true: "#4CAF50", false: "#CCC" }}
            thumbColor={isNotificationsEnabled ? "#FFF" : "#AAA"}
          />
        </View>
        <View
          style={[styles.optionContainer, isDarkMode && styles.darkModeOption]}
        >
          <Text style={[styles.optionText, isDarkMode && styles.darkModeText]}>
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={setDarkMode}
            trackColor={{ true: "#4CAF50", false: "#CCC" }}
            thumbColor={isDarkMode ? "#FFF" : "#AAA"}
          />
        </View>
      </View>

      {/* Change Password Modal */}
      <ChangePasswordModal
        visible={isChangePasswordModalVisible}
        onClose={() => setChangePasswordModalVisible(false)}
        onSave={handleSavePassword}
        isDarkMode={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  darkModeContainer: {
    backgroundColor: "#333",
  },
  header: {
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  darkModeText: {
    color: "#FFF",
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  darkModeOption: {
    backgroundColor: "#444",
    borderBottomColor: "#555",
  },
  optionText: {
    fontSize: 16,
  },
  darkModeText: {
    color: "#FFF",
  },
});

export default SettingsScreen;
