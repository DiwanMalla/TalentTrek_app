import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Linking,
  Image,
} from "react-native";

const PaymentScreen = ({ route, navigation }) => {
  const { membershipId, membershipName, membershipPrice } = route.params;
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const PAYPAL_API = "https://api-m.sandbox.paypal.com/v1/payments/payment";

  const handlePayPalPayment = async () => {
    setSelectedMethod("PayPal");
    setLoading(true);
    try {
      const formattedPrice = parseFloat(
        membershipPrice.replace("$", "")
      ).toFixed(2);
      const response = await fetch(PAYPAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer A21AAKXI8L9mXtgajdO-c-ggNmu2fcTrw-SjUdChV9uzA17SSflZ5MJAA_kJzajgTpf54_wCRhohJ9iekSTB8996eu9jiXZbQ`,
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
      console.log(paymentResult);
      if (paymentResult && paymentResult.links) {
        const approvalUrl = paymentResult.links.find(
          (link) => link.rel === "approval_url"
        ).href;
        Linking.openURL(approvalUrl);
      } else {
        Alert.alert("Error", "Payment initiation failed.");
      }
    } catch (error) {
      console.error("Payment Error: ", error);
      Alert.alert("Error", "An error occurred while processing the payment.");
    } finally {
      setLoading(false);
      setSelectedMethod(null);
    }
  };

  const handleOtherPayments = (method) => {
    setSelectedMethod(method);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedMethod(null);
      Alert.alert(
        `${method} Payment`,
        "This payment method is under development."
      );
    }, 2000); // Simulate a delay for loading
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pay for {membershipName}</Text>
      <Text style={styles.price}>Price: {membershipPrice}</Text>

      {/* PayPal Button */}
      <TouchableOpacity
        style={[styles.payButton, styles.paypalButton]}
        onPress={handlePayPalPayment}
        disabled={loading}
      >
        {loading && selectedMethod === "PayPal" ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Image
            source={require("../../../../../../assets/pay/paypal.webp")}
            style={styles.logo}
          />
        )}
      </TouchableOpacity>

      {/* Shop Pay Button */}
      <TouchableOpacity
        style={[styles.payButton, styles.shopPayButton]}
        onPress={() => handleOtherPayments("Shop Pay")}
        disabled={loading}
      >
        {loading && selectedMethod === "Shop Pay" ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Image
            source={require("../../../../../../assets/pay/shoppay.png")}
            style={styles.logo}
          />
        )}
      </TouchableOpacity>

      {/* Amazon Pay Button */}
      <TouchableOpacity
        style={[styles.payButton, styles.amazonPayButton]}
        onPress={() => handleOtherPayments("Amazon Pay")}
        disabled={loading}
      >
        {loading && selectedMethod === "Amazon Pay" ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Image
            source={require("../../../../../../assets/pay/amazonpay.png")}
            style={styles.logo}
          />
        )}
      </TouchableOpacity>

      {/* Apple Pay Button */}
      <TouchableOpacity
        style={[styles.payButton, styles.applePayButton]}
        onPress={() => handleOtherPayments("Apple Pay")}
        disabled={loading}
      >
        {loading && selectedMethod === "Apple Pay" ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Image
            source={require("../../../../../../assets/pay/applepay.webp")}
            style={styles.logo}
          />
        )}
      </TouchableOpacity>

      {/* Google Pay Button */}
      <TouchableOpacity
        style={[styles.payButton, styles.googlePayButton]}
        onPress={() => handleOtherPayments("Google Pay")}
        disabled={loading}
      >
        {loading && selectedMethod === "Google Pay" ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Image
            source={require("../../../../../../assets/pay/gpay.webp")}
            style={styles.logo}
          />
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
    width: "90%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  paypalButton: {
    backgroundColor: "#FFFFFF", // PayPal Button Color
  },
  shopPayButton: {
    backgroundColor: "#5a31f4", // Shop Pay Button Color
  },
  amazonPayButton: {
    backgroundColor: "#FFFFFF", // Amazon Pay Button Color
  },
  applePayButton: {
    backgroundColor: "#FFFFFF", // Apple Pay Button Color
  },
  googlePayButton: {
    backgroundColor: "#FFFFFF", // Google Pay Button Color
  },
});

export default PaymentScreen;
