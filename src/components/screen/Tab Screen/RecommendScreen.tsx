import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
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
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleApply = (jobTitle) => {
    Alert.alert("Application Sent", `You have applied for ${jobTitle}`);
    // You can also navigate to a different screen or perform other actions here
  };

  const renderItem = ({ item }) => (
    <Animated.View style={[styles.jobItem, { opacity: fadeAnim }]}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => handleApply(item.title)}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </Animated.View>
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
  container: {
    marginTop: 40,
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff", // Set a background color that fits the overall theme
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333", // Darker color for text
    marginBottom: 20,
  },
  jobItem: {
    backgroundColor: "#f4f4f4", // Updated background color for modern look
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333", // Consistent text color
  },
  company: {
    fontSize: 16,
    color: "#666666", // Subtle color for company name
  },
  location: {
    fontSize: 14,
    color: "#999999", // Lighter color for location
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: "#007bff", // Update with your primary color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#ffffff", // White text color for contrast
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecommendedScreen;
