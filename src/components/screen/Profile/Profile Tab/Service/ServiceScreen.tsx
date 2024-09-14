import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const services = [
  {
    id: "1",
    name: "AI-Powered Internship Matching",
    description:
      "Advanced algorithms to match students with tailored internship opportunities.",
  },
  {
    id: "2",
    name: "Career Development Tools",
    description:
      "Tools to enhance skills, prepare resumes, and boost employability.",
  },
  {
    id: "3",
    name: "Company Partnership Program",
    description:
      "Helping companies find the best talent through our internship platform.",
  },
  {
    id: "4",
    name: "Community Engagement",
    description:
      "Building a community of students and mentors to enhance career growth.",
  },
];

const ServicesScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Our Services</Text>
      </View>

      {/* Services List */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.serviceDescription}>{item.description}</Text>
          </View>
        )}
        style={styles.serviceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 35,
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
  serviceList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  serviceItem: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default ServicesScreen;
