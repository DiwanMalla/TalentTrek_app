import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Easing,
} from "react-native";

const initialJobs = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Corp",
    status: "Applied",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Innovate LLC",
    status: "Interview Scheduled",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Creative Solutions",
    status: "Offer Received",
  },
  // Add more jobs here
];

const MyJobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState(initialJobs);
  const fadeAnim = new Animated.Value(1);

  const handleJobAction = (jobId, action) => {
    if (action === "Deleted") {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start(() => {
        setJobs(jobs.filter((job) => job.id !== jobId));
        fadeAnim.setValue(1); // Reset animation value
      });
    } else {
      Alert.alert("Action Taken", `Job ${jobId} marked as ${action}`);
    }
  };

  const renderItem = ({ item }) => (
    <Animated.View style={[styles.jobItem, { opacity: fadeAnim }]}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.completeButton]}
          onPress={() => handleJobAction(item.id, "Completed")}
        >
          <Text style={styles.buttonText}>Mark as Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleJobAction(item.id, "Deleted")}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff", // Set a background color that fits the overall theme
    marginTop: 40,
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
  status: {
    fontSize: 14,
    color: "#999999", // Lighter color for status
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  completeButton: {
    backgroundColor: "#4caf50", // Green color for completed
  },
  deleteButton: {
    backgroundColor: "#f44336", // Red color for delete
  },
  buttonText: {
    color: "#ffffff", // White text color for contrast
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyJobsScreen;
