import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import InternshipItem from "../InternshipItem";
import useFetch from "../../../../hook/useFetch"; // Make sure the path is correct
import { Ionicons } from "@expo/vector-icons";

const AllInternships = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "node.js developer in new-york,usa",
    num_pages: 1,
    page: 5,
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust as necessary
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#32CD32" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to load jobs.</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={getCurrentPageItems()}
        renderItem={({ item }) => <InternshipItem item={item} />}
        keyExtractor={(item) => item.id}
      />

      {/* Pagination Controls */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 1}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={currentPage === 1 ? "#ccc" : "#000"}
          />
        </TouchableOpacity>

        <Text style={styles.pageNumber}>
          {currentPage} / {totalPages}
        </Text>

        <TouchableOpacity
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={currentPage === totalPages ? "#ccc" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  pageNumber: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AllInternships;
