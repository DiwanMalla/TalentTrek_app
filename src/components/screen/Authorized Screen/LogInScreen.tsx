// LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome <Text style={styles.highlight}>Hunters</Text>
      </Text>
      <Text style={styles.subtitle}>
        Log in with your account or with your social media
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity>
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.navigate("SignUpScreen")}
          style={styles.signUpLink}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: { color: "green" },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  forgot: { textAlign: "right", marginBottom: 20 },
  button: {
    backgroundColor: "#000080",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#fff", fontSize: 18 },
  orText: { textAlign: "center", fontSize: 16, marginBottom: 10 },
  googleText: { textAlign: "center", color: "blue", fontSize: 18 },
  footerText: { textAlign: "center", marginTop: 20 },
  signUpLink: { color: "green" },
});

export default LoginScreen;
