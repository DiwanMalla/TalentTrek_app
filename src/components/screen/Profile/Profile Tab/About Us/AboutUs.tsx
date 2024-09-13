import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.subtitle}>
            Our Commitment to Legal Compliance
          </Text>
        </View>

        {/* Introduction Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.sectionContent}>
            TalentTrek is dedicated to providing exceptional services while
            ensuring full legal compliance. Our mission is to assist students
            and companies in finding the best internship opportunities while
            adhering to all relevant regulations.
          </Text>
        </View>

        {/* Legal Compliance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Registrations, Licensing, Taxation, and Other Legal Requirements
          </Text>
          <View style={styles.complianceList}>
            <View style={styles.complianceItem}>
              <FontAwesome name="certificate" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>
                  Partnership Registration
                </Text>
                <Text>
                  Registered as a partnership in accordance with the Partnership
                  Act of 1892 No. 12, NSW guidelines.
                </Text>
              </View>
            </View>

            <View style={styles.complianceItem}>
              <MaterialIcons name="business" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>
                  Australian Business Number (ABN)
                </Text>
                <Text>21 689 959 496</Text>
              </View>
            </View>

            <View style={styles.complianceItem}>
              <MaterialIcons name="network-wired" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>NBN Registration</Text>
                <Text>Compliant with NBN requirements.</Text>
              </View>
            </View>

            <View style={styles.complianceItem}>
              <FontAwesome name="registered" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>
                  Business Name Registration
                </Text>
                <Text>Registered business name to ensure legal operation.</Text>
              </View>
            </View>

            <View style={styles.complianceItem}>
              <MaterialIcons name="receipt" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>
                  Goods & Services Tax (GST)
                </Text>
                <Text>GST compliant as per Australian regulations.</Text>
              </View>
            </View>

            <View style={styles.complianceItem}>
              <MaterialIcons name="privacy-tip" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>
                  Australian Privacy Principles (APPs)
                </Text>
                <Text>Adhering to APPs for data protection and privacy.</Text>
              </View>
            </View>

            <View style={styles.complianceItem}>
              <MaterialIcons name="work" size={24} color="#333" />
              <View style={styles.complianceText}>
                <Text style={styles.complianceTitle}>
                  Employment and Fair Work Regulations
                </Text>
                <Text>
                  Compliance with employment laws and fair work regulations.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  sectionContent: {
    fontSize: 16,
    color: "#555",
  },
  complianceList: {
    marginTop: 10,
  },
  complianceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  complianceText: {
    marginLeft: 10,
  },
  complianceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default AboutUsScreen;
