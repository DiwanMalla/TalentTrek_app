import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import InternshipItem from "../Internship/InternshipItem"; // Assuming InternshipItem is your item component
import useFetch from "../../../hook/useFetch";
import { Ionicons } from "@expo/vector-icons";
import CustomAdCard from "./AdComponent"; // Import the custom ad component

const { width, height } = Dimensions.get("window");

const SearchResult = ({ route }) => {
  const { searchQuery } = route.params;
  const { data, isLoading, error } = useFetch("search", {
    query: searchQuery,
    num_pages: 1,
    page: 5,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Inject the ad into the results
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let items = data.slice(startIndex, endIndex);

    // Randomly add the ad card in the data
    const adPosition = Math.floor(Math.random() * items.length);
    items.splice(adPosition, 0, { type: "ad" });

    return items;
  };

  const renderItem = ({ item }) => {
    if (item.type === "ad") {
      return <CustomAdCard />;
    }
    return <InternshipItem item={item} />;
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
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
      />

      {/* Pagination Controls */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        >
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
          onPress={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
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
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  flatListContainer: {
    paddingHorizontal: 10, // Set horizontal padding to align content
  },
  internshipItem: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: width * 0.95, // Make the card span 95% of the screen width
    alignSelf: "center", // Center the card horizontally
    elevation: 3, // Adds a subtle shadow effect for depth
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
    paddingVertical: 15,
  },
  pageNumber: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchResult;
