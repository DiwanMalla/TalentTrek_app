import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const memberships = [
  {
    id: "1",
    name: "Basic Membership",
    description: "Access to basic features",
    price: "$5/month",
  },
  {
    id: "2",
    name: "Premium Membership",
    description: "Access to all features",
    price: "$15/month",
  },
  // Add more memberships here
];

const MembershipScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Fade animation
  const [slideAnim] = useState(new Animated.Value(50)); // Slide animation

  // Animate the membership items on screen load
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleMembershipSelect = (membership) => {
    navigation.navigate("PaymentScreen", {
      membershipId: membership.id,
      membershipName: membership.name,
      membershipPrice: membership.price,
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.membershipsContainer,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <FlatList
          data={memberships}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.membershipContainer}
              onPress={() => handleMembershipSelect(item)}
            >
              <Text style={styles.membershipName}>{item.name}</Text>
              <Text style={styles.membershipDescription}>
                {item.description}
              </Text>
              <Text style={styles.membershipPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "#FFF",
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#333",
  },
  membershipsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  membershipContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  membershipName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  membershipDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  membershipPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
  },
});

export default MembershipScreen;
