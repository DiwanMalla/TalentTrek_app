import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons

const SearchBar = ({ value, onChangeText, onSearch }: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for internships..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
        <Ionicons name="search-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    elevation: 2, // Adds subtle shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    fontSize: 16,
    color: "#333",
    borderWidth: 0,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;
