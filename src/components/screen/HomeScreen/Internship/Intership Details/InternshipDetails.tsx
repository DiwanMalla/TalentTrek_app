import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import Description from "./InternDescription";
import About from "./About";
import useFetch from "../../../../hook/useFetch";
const InternshipDetails = ({ route, navigation }) => {
  const { title, location, duration, logo, id } = route.params;
  const [activeTab, setActiveTab] = useState("Descriptions");

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: id,
  });
  const jobHighlights = data[0]?.job_highlights;
  const jobDescription = data[0]?.job_description;
  const handleApply = (jobTitle) => {
    Alert.alert("Application Sent", `You have applied for ${jobTitle}`);
    navigation.navigate("MainApp");
  };
  // Function to format date
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#2D5CFF" />;
  }

  if (error) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Text style={styles.favoriteButton}>♥</Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri:
                logo ||
                "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            style={styles.logo}
            onError={() => {
              console.log("Error loading image, fallback to default.");
            }}
          />
        </View>

        {/* Title and Location */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {formatDate(duration)} / {location}
        </Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Descriptions" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Descriptions")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Descriptions" && styles.activeTabText,
              ]}
            >
              Descriptions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "About Company" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("About Company")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "About Company" && styles.activeTabText,
              ]}
            >
              About Company
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content based on Active Tab */}

        {activeTab === "Descriptions" ? (
          <Description job_highlight={jobHighlights} />
        ) : (
          <About job_description={jobDescription} />
        )}

        {/* Apply Button */}
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => handleApply(title)}
        >
          <Text style={styles.applyButtonText}>Apply Internship</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
  },
  topBar: {
    marginBottom: 20,
    alignItems: "flex-end", // Aligns the content to the right
  },
  favoriteButton: {
    fontSize: 24,
    color: "red",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#E8ECF5",
    borderRadius: 25,
    padding: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#2D5CFF",
  },
  tabText: {
    fontSize: 16,
    color: "#777",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  applyButton: {
    backgroundColor: "#2D5CFF",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default InternshipDetails;
