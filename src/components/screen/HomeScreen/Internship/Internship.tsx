import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import InternshipItem from "./InternshipItem";
import useFetch from "../../../hook/useFetch"; // Adjust the path according to your file structure
import { useNavigation } from "@react-navigation/native";

const Internships = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "node.js developer in new-york,usa",
    num_pages: 1,
  }); // Adjust the query parameters as needed

  // Limit the number of items to 3 or 4
  const displayedInternships = data.slice(0, 4);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#32CD32" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to load jobs.</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Actively Hiring</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllInternships")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={displayedInternships}
        renderItem={({ item }) => <InternshipItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  seeAll: {
    fontSize: 14,
    color: "#32CD32",
    fontWeight: "600",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Internships;
