import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HelpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
      </View>

      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <Ionicons name="help-circle-outline" size={80} color="#4A90E2" />
        <Text style={styles.title}>How can we help you?</Text>
        <Text style={styles.description}>
          Our support team is available 24/7 to help you with any issues or
          questions. Please reach out to us at:
        </Text>
        <Text style={styles.contact}>help@talenttrek.com</Text>
        <Text style={styles.contact}>+123456789</Text>
        <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#333",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 22,
  },
  contact: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 5,
  },
  supportButton: {
    marginTop: 30,
    backgroundColor: "#4A90E2",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    elevation: 3,
  },
  supportButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HelpScreen;
