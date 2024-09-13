import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InternshipItemProps {
  item: {
    job_title: string;
    employer_name: string;
    job_city: string;
    job_offer_expiration_datetime_utc: string;
    employer_logo?: string;
    job_id: string;
  };
}

const InternshipItem: React.FC<InternshipItemProps> = ({ item }) => {
  const navigation = useNavigation();
  const [imageError, setImageError] = React.useState(false);

  // Function to format date
  const formatDate = (dateString: string | number | Date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Image
          source={{
            uri: imageError
              ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              : item?.employer_logo,
          }}
          style={styles.logo}
          onError={() => setImageError(true)}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.job_title}</Text>
          <Text style={styles.company}>{item.employer_name}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons name="location-outline" size={20} color="#32CD32" />
          <Text style={styles.detailText}> {item?.job_city}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="time-outline" size={20} color="#32CD32" />
          <Text style={styles.detailText}>
            {formatDate(item.job_offer_expiration_datetime_utc)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() =>
          navigation.navigate("InternshipDetails", {
            title: item.job_title,
            location: item.job_city,
            duration: item.job_offer_expiration_datetime_utc,
            logo: item.employer_logo,
            id: item.job_id,
          })
        }
      >
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F8FAFF",
    borderRadius: 15,
    padding: 10,
    width: 200,
    height: 220,
    marginRight: 15,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  company: {
    fontSize: 12,
    color: "#555",
  },
  detailsContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 12,
    color: "#777",
  },
  applyButton: {
    backgroundColor: "#2D5CFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default InternshipItem;
