import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
  Dimensions,
} from "react-native";

// Partner logos (assumed logos are located in assets folder)
const partnerLogos = [
  { id: 1, imageUrl: require("../../../../../assets/Google.png") },
  { id: 2, imageUrl: require("../../../../../assets/facebook.png") },
  { id: 3, imageUrl: require("../../../../../assets/netflix.png") },
  { id: 4, imageUrl: require("../../../../../assets/amazonprime.png") },
  { id: 5, imageUrl: require("../../../../../assets/vu.png") },
];

// Social media links with colors
const socialLinks = [
  { id: 1, name: "Facebook", url: "https://facebook.com", color: "#4267B2" },
  { id: 2, name: "Pinterest", url: "https://pinterest.com", color: "#E60023" },
  { id: 3, name: "Twitter", url: "https://twitter.com", color: "#1DA1F2" },
];

const PartnersAndSocial: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const logoWidth = 70 + 20; // width of logo + margin
    const totalWidth = logoWidth * partnerLogos.length;

    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scrollX, {
            toValue: -totalWidth, // Move left by the total width of all logos
            duration: 9000, // Adjust this duration based on how fast you want the scroll
            useNativeDriver: true,
          }),
          Animated.timing(scrollX, {
            toValue: 0, // Reset position to the beginning
            duration: 0, // No animation during reset
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [scrollX]);

  const translateX = scrollX.interpolate({
    inputRange: [-Dimensions.get("window").width, 0],
    outputRange: [0, Dimensions.get("window").width], // TranslateX for scrolling effect
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Partners</Text>
      <View style={styles.partnerContainer}>
        <Animated.View
          style={[styles.partnerList, { transform: [{ translateX }] }]}
        >
          {/* Duplicate the logos for smooth looping */}
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <View key={index} style={styles.partnerItem}>
              <Image source={partner.imageUrl} style={styles.partnerImage} />
            </View>
          ))}
        </Animated.View>
      </View>
      <Text style={styles.followTitle}>Follow Us on Social Networks</Text>
      <View style={styles.socialContainer}>
        {socialLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            onPress={() => Linking.openURL(link.url)}
            style={[styles.socialButton, { backgroundColor: link.color }]}
          >
            <Text style={styles.socialText}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  partnerContainer: {
    height: 100,
    overflow: "hidden", // Hide the parts that go out of bounds
    width: "100%",
    marginBottom: 20,
  },
  partnerList: {
    flexDirection: "row",
    width: "200%", // Ensure the list is wide enough for a smooth scroll
  },
  partnerItem: {
    marginHorizontal: 10, // Adjust margin for a seamless appearance
  },
  partnerImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  followTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  socialButton: {
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff", // Ensure text is readable on different backgrounds
  },
});

export default PartnersAndSocial;
