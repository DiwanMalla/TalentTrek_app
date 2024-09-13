import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./src/components/screen/LandingScreen";
import AppNavigator from "./src/components/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
