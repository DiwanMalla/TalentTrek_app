import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./HomeScreen/Header";
// import SearchBar from "../Components/SearchBar";
import HighlightedEvent from "./HomeScreen/HighlightedEvent";
import Internships from "./HomeScreen/Internship/Internship";
// import Testimonials from "../Components/Testinomials";
// import NewInternship from "../Components/New Internship/NewInternship"; // Import the new component

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      {/* <SearchBar /> */}
      <HighlightedEvent />
      <Internships />
      {/* <NewInternship />
      <Testimonials /> */}
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
