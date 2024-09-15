import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Linking, // Add Linking from React Native
} from "react-native";

const PaymentScreen = ({ route, navigation }) => {
  const { membershipId, membershipName, membershipPrice } = route.params;
  const [loading, setLoading] = useState(false);

  const PAYPAL_API = "https://api-m.sandbox.paypal.com/v1/payments/payment";

  const handlePayment = async () => {
    setLoading(true);
    try {
      const formattedPrice = parseFloat(
        membershipPrice.replace("$", "")
      ).toFixed(2);
      const response = await fetch(PAYPAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer A21AAJUFw3nqS1amOZaWbtElQaXJB9IQutoGGDwkz4FlR7-tdzU0Dqu8sDjC2VhuyDdBpN4pH39wNJq7ROwT6DuEn_uxkGEaw`, // Use the access token for authorization
        },
        body: JSON.stringify({
          intent: "sale",
          payer: {
            payment_method: "paypal",
          },
          transactions: [
            {
              amount: {
                total: formattedPrice,
                currency: "USD",
              },
              description: `Payment for ${membershipName}`,
            },
          ],
          redirect_urls: {
            return_url: "https://your-app.com/payment-success",
            cancel_url: "https://your-app.com/payment-cancel",
          },
        }),
      });

      const paymentResult = await response.json();

      if (paymentResult && paymentResult.links) {
        const approvalUrl = paymentResult.links.find(
          (link) => link.rel === "approval_url"
        ).href;
        // Open the approval URL in the default browser
        Linking.openURL(approvalUrl);
      } else {
        console.log(paymentResult);
        Alert.alert("Error", `Payment initiation failed. `);
      }
    } catch (error) {
      console.error("Payment Error: ", error);
      Alert.alert("Error", "An error occurred while processing the payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pay for {membershipName}</Text>
      <Text style={styles.price}>Price: {membershipPrice}</Text>
      <TouchableOpacity
        style={styles.payButton}
        onPress={handlePayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.payButtonText}>Pay with PayPal</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#0070BA",
    padding: 15,
    borderRadius: 5,
  },
  payButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentScreen;
