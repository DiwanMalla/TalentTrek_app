import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Animated,
} from "react-native";

const CustomAdCard = () => {
  // Animated values
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0
  const scaleAnim = useRef(new Animated.Value(0.9)).current; // Initial scale is 0.9

  // Animation effect
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity
      duration: 500, // Duration in ms
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    Animated.timing(scaleAnim, {
      toValue: 1, // Final scale
      duration: 500, // Duration in ms
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [fadeAnim, scaleAnim]);

  const handlePress = () => {
    const youtubeLink =
      "https://www.youtube.com/watch?v=R4em3LKQCAQ&list=RDLXUSaVw3Mvk&index=10"; // Replace with your YouTube link
    Linking.openURL(youtubeLink).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.adCardContainer}>
      <Animated.View
        style={[
          styles.adCard,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <TouchableOpacity onPress={handlePress}>
          {/* Image of the ad */}
          <Image
            source={{
              uri: "https://img.youtube.com/vi/R4em3LKQCAQ/default.jpg",
            }}
            style={styles.adImage}
          />

          {/* Title of the ad */}
          <Text style={styles.adTitle}>
            Justin Bieber - As Long As You Love Me ft. Big Sean
          </Text>

          {/* Ad description or additional info */}
          <Text style={styles.adDescription}>
            Music video by Justin Bieber performing As Long As You Love Me. ©
            2012 The Island Def Jam Music Group
          </Text>

          {/* Optional CTA button */}
          <TouchableOpacity style={styles.adButton} onPress={handlePress}>
            <Text style={styles.adButtonText}>Watch Now</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  adCardContainer: {
    alignItems: "center", // Center the animated view horizontally
    marginVertical: 10,
  },
  adCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    width: 220, // Adjusted width
  },
  adImage: {
    width: "100%",
    height: 140, // Adjusted height
    borderRadius: 10,
  },
  adTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  adDescription: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
  adButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 8,
    alignItems: "center",
  },
  adButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CustomAdCard;
