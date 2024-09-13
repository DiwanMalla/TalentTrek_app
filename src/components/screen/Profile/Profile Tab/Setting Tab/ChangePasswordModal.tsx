// ChangePasswordModal.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";

interface ChangePasswordModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (newPassword: string, confirmPassword: string) => void;
  isDarkMode: boolean;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  visible,
  onClose,
  onSave,
  isDarkMode,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordInputRef = useRef<TextInput | null>(null);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={[styles.modalBackground, isDarkMode && styles.darkModeModal]}
          >
            <View
              style={[
                styles.modalContent,
                isDarkMode && styles.darkModeContent,
              ]}
            >
              <Text style={[styles.title, isDarkMode && styles.darkModeText]}>
                Change Password
              </Text>
              <TextInput
                ref={passwordInputRef}
                style={[styles.input, isDarkMode && styles.darkModeInput]}
                placeholder="New Password"
                placeholderTextColor="#000" // Black placeholder color
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TextInput
                style={[styles.input, isDarkMode && styles.darkModeInput]}
                placeholder="Confirm Password"
                placeholderTextColor="#000" // Black placeholder color
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                style={[styles.saveButton, isDarkMode && styles.darkModeButton]}
                onPress={() => {
                  onSave(newPassword, confirmPassword);
                  onClose();
                }}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.cancelButton,
                  isDarkMode && styles.darkModeButton,
                ]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  darkModeModal: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  darkModeText: {
    color: "#FFF",
  },
  input: {
    width: "100%",
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: "#000", // Ensure text is visible on light backgrounds
  },
  darkModeInput: {
    borderColor: "#555",
    backgroundColor: "#444",
    color: "#FFF", // Ensure text is visible on dark backgrounds
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  darkModeButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ChangePasswordModal;
