import React from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const ContactScreen = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={80} style={styles.blurView}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>

            {/* Header */}
            <Text style={styles.modalTitle}>GET IN TOUCH</Text>
            <Text style={styles.modalSubtitle}>
              24/7 We will answer your questions and problems
            </Text>

            {/* First and Last Name in one row */}
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, styles.halfWidth]}
                placeholder="First Name"
              />
              <TextInput
                style={[styles.input, styles.halfWidth]}
                placeholder="Last Name"
              />
            </View>

            {/* Email and Phone Inputs */}
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Phone" />

            {/* Describe your issue Input */}
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your issue"
              multiline
            />

            {/* Send Button */}
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => {
                alert("Submitted");
                onClose(); // Close the modal after the alert
              }}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>

            {/* Bottom Section with Logo, Slogan, and Social Media */}
            <View style={styles.bottomSection}>
              <ImageBackground
                source={require("../../../../../assets/banner.jpg")}
                style={styles.backgroundImage}
              >
                {/* Logo above the slogan */}
                <Image
                  source={require("../../../../../assets/logo.jpeg")} // Add your logo image path here
                  style={styles.logo}
                />

                <Text style={styles.companySlogan}>
                  Bridging gap between students and company
                </Text>

                {/* Social Media Icons */}
                <View style={styles.socialMediaContainer}>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.socialButton]}>
                    <Ionicons name="logo-instagram" size={24} color="#E1306C" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-facebook" size={24} color="#1877F2" />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "90%",
    paddingTop: 70,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  blurView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfWidth: {
    width: "48%",
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  textArea: {
    height: 100,
  },
  sendButton: {
    backgroundColor: "#2ECC40",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  sendButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  bottomSection: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },
  companySlogan: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  socialButton: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default ContactScreen;
