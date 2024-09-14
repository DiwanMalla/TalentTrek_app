import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./HomeScreen/Header";
import HighlightedEvent from "./HomeScreen/HighlightedEvent";
import Internships from "./HomeScreen/Internship/Internship";
import NewInternship from "./HomeScreen/Internship/New Internship/NewInternship";
import Testimonials from "./HomeScreen/Testinomials/Testinomials";
import SearchBar from "./HomeScreen/SearchBar/SearchBarScreen"; // Add SearchBar
import PromotionBanner from "./HomeScreen/PromotionBanner/PromotionBanner";

const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Navigate to SearchResult and pass the search query
    navigation.navigate("SearchResult", { searchQuery });
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSearch={handleSearch}
      />
      <HighlightedEvent />
      <PromotionBanner />
      <Internships />
      <NewInternship />
      <Testimonials />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});

export default HomeScreen;
