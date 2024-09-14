import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

// Define your colors
const colors = {
  primary: "#4A90E2", // Example primary color
  secondary: "#50E3C2", // Example secondary color
  background: "#F5F5F5",
  textPrimary: "#333",
  textSecondary: "#555",
  cardBackground: "#FFF",
};

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Animatable.Text
            animation="fadeIn"
            duration={1000}
            style={styles.title}
          >
            About Us
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={500}
            duration={1000}
            style={styles.subtitle}
          >
            Our Commitment to Legal Compliance
          </Animatable.Text>
        </View>

        {/* Introduction Section */}
        <Animatable.View
          animation="fadeInUp"
          duration={1000}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.sectionContent}>
            TalentTrek is dedicated to providing exceptional services while
            ensuring full legal compliance. Our mission is to assist students
            and companies in finding the best internship opportunities while
            adhering to all relevant regulations.
          </Text>
        </Animatable.View>

        {/* Legal Compliance Section */}
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          duration={1000}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>
            Registrations, Licensing, Taxation, and Other Legal Requirements
          </Text>
          <View style={styles.complianceList}>
            {[
              {
                icon: (
                  <FontAwesome
                    name="certificate"
                    size={24}
                    color={colors.primary}
                  />
                ),
                title: "Partnership Registration",
                description:
                  "Registered as a partnership in accordance with the Partnership Act of 1892 No. 12, NSW guidelines.",
              },
              {
                icon: (
                  <MaterialIcons
                    name="business"
                    size={24}
                    color={colors.primary}
                  />
                ),
                title: "Australian Business Number (ABN)",
                description: "21 689 959 496",
              },
              {
                icon: (
                  <MaterialIcons
                    name="network-wired"
                    size={24}
                    color={colors.primary}
                  />
                ),
                title: "NBN Registration",
                description: "Compliant with NBN requirements.",
              },
              {
                icon: (
                  <FontAwesome
                    name="registered"
                    size={24}
                    color={colors.primary}
                  />
                ),
                title: "Business Name Registration",
                description:
                  "Registered business name to ensure legal operation.",
              },
              {
                icon: (
                  <MaterialIcons
                    name="receipt"
                    size={24}
                    color={colors.primary}
                  />
                ),
                title: "Goods & Services Tax (GST)",
                description: "GST compliant as per Australian regulations.",
              },
              {
                icon: (
                  <MaterialIcons
                    name="privacy-tip"
                    size={24}
                    color={colors.primary}
                  />
                ),
                title: "Australian Privacy Principles (APPs)",
                description:
                  "Adhering to APPs for data protection and privacy.",
              },
              {
                icon: (
                  <MaterialIcons name="work" size={24} color={colors.primary} />
                ),
                title: "Employment and Fair Work Regulations",
                description:
                  "Compliance with employment laws and fair work regulations.",
              },
            ].map((item, index) => (
              <View key={index} style={styles.complianceItem}>
                {item.icon}
                <View style={styles.complianceText}>
                  <Text style={styles.complianceTitle}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.secondary,
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.textPrimary,
  },
  sectionContent: {
    fontSize: 16,
    color: colors.textSecondary,
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
    color: colors.textPrimary,
  },
});

export default AboutUsScreen;
