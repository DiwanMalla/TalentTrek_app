import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const testimonials = [
  {
    id: "1",
    name: "John Doe",
    text: "TalentTrek helped me land my dream internship at Google!",
    image: require("../../../../../assets/student.jpg"),
  },
  {
    id: "2",
    name: "Jane Smith",
    text: "The platform connected me with incredible opportunities.",
    image: require("../../../../../assets/student.jpg"),
  },
];

const TestimonialItem = ({ item }: any) => {
  return (
    <View style={styles.testimonialItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

const Testimonials = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Success Stories</Text>
      <FlatList
        data={testimonials}
        renderItem={({ item }) => <TestimonialItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  testimonialItem: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
});

export default Testimonials;
