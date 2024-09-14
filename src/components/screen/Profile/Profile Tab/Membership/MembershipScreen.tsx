import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

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
  const handleMembershipSelect = (membership) => {
    navigation.navigate("PaymentScreen", {
      membershipId: membership.id,
      membershipName: membership.name,
      membershipPrice: membership.price,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Membership</Text>
      <FlatList
        data={memberships}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.membershipContainer}
            onPress={() => handleMembershipSelect(item)}
          >
            <Text style={styles.membershipName}>{item.name}</Text>
            <Text style={styles.membershipDescription}>{item.description}</Text>
            <Text style={styles.membershipPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  membershipContainer: {
    padding: 15,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  membershipName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  membershipDescription: {
    fontSize: 14,
    color: "#666",
  },
  membershipPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default MembershipScreen;
