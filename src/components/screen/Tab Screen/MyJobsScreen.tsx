import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const myJobs = [
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
  const handleJobAction = (jobId, action) => {
    Alert.alert("Action Taken", `Job ${jobId} marked as ${action}`);
    // You can also navigate to a different screen or perform other actions here
  };

  const renderItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleJobAction(item.id, "Completed")}
        >
          <Text style={styles.buttonText}>Mark as Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleJobAction(item.id, "Deleted")}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Jobs</Text>
      <FlatList
        data={myJobs}
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
  status: { fontSize: 14, color: "#999", marginBottom: 10 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
});

export default MyJobsScreen;
