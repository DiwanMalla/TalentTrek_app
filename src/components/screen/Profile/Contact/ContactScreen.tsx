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
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import MapView, { Marker } from "react-native-maps";

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
            <Text style={styles.modalTitle}>Contact Us</Text>

            {/* Contact Form */}
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.input}
                placeholder="Subject"
                placeholderTextColor="#000"
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Message"
                placeholderTextColor="#000"
                multiline
              />
              {/* Submit Button */}
              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => {
                  alert("Submitted");
                  onClose(); // Close the modal after the alert
                }}
              >
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>

            {/* Contact Details */}
            <View style={styles.contactDetails}>
              <Text style={styles.detailTitle}>Contact Details</Text>
              <Text style={styles.detail}>Email: example@example.com</Text>
              <Text style={styles.detail}>Phone: +1-234-567-890</Text>
              <Text style={styles.detail}>
                Address: 168 Sussex Street, NSW, Sydney
              </Text>
            </View>

            {/* Location Map */}
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -33.86785,
                longitude: 151.20732,
                latitudeDelta: 0.005, // Decrease for a closer zoom
                longitudeDelta: 0.015, // Decrease for a closer zoom
              }}
            >
              <Marker
                coordinate={{ latitude: -33.86785, longitude: 151.20732 }}
              />
            </MapView>

            {/* Social Media Links */}
            <View style={styles.bottomSection}>
              <ImageBackground
                source={require("../../../../../assets/banner.jpg")}
                style={styles.backgroundImage}
              >
                {/* Logo above the slogan */}
                <Image
                  source={require("../../../../../assets/logo.jpeg")}
                  style={styles.logo}
                />

                <Text style={styles.companySlogan}>
                  Bridging the gap between students and companies
                </Text>

                {/* Social Media Icons */}
                <View style={styles.socialMediaContainer}>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => Linking.openURL("https://twitter.com")}
                  >
                    <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => Linking.openURL("https://instagram.com")}
                  >
                    <Ionicons name="logo-instagram" size={24} color="#E1306C" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => Linking.openURL("https://linkedin.com")}
                  >
                    <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => Linking.openURL("https://facebook.com")}
                  >
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
  formContainer: {
    width: "100%",
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
  contactDetails: {
    width: "100%",
    marginVertical: 20,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  bottomSection: {
    width: "100%",
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
