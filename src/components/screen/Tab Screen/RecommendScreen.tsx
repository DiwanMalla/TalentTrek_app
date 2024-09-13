import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const jobRecommendations = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, NY",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Innovate LLC",
    location: "San Francisco, CA",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Creative Solutions",
    location: "Los Angeles, CA",
  },
  // Add more job recommendations here
];

const RecommendedScreen = ({ navigation }) => {
  const handleApply = (jobTitle) => {
    Alert.alert("Application Sent", `You have applied for ${jobTitle}`);
    // You can also navigate to a different screen or perform other actions here
  };

  const renderItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => handleApply(item.title)}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Job Recommendations</Text>
      <FlatList
        data={jobRecommendations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  jobItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  jobTitle: { fontSize: 18, fontWeight: "bold" },
  company: { fontSize: 16, color: "#666" },
  location: { fontSize: 14, color: "#999" },
  applyButton: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  applyButtonText: { color: "#fff", fontSize: 16 },
});

export default RecommendedScreen;
