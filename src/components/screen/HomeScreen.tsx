import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./HomeScreen/Header";
import HighlightedEvent from "./HomeScreen/HighlightedEvent";
import Internships from "./HomeScreen/Internship/Internship";
import NewInternship from "./HomeScreen/Internship/New Internship/NewInternship";
import Testimonials from "./HomeScreen/Testinomials/Testinomials";
import SearchBar from "./HomeScreen/SearchBar/SearchBarScreen";
import PromotionBanner from "./HomeScreen/PromotionBanner/PromotionBanner";
import PartnersAndSocial from "./HomeScreen/Partner&Social/PartnersAndSocial"; // Import the new component

const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
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

      <Internships />
      <NewInternship />
      <Testimonials />
      <PartnersAndSocial />
      <PromotionBanner />
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
