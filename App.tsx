import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/components/navigation/AppNavigator";
import { ProfileProvider } from "./src/components/screen/Profile/Edit/ProfileContext"; // Import the ProfileProvider

const App: React.FC = () => {
  return (
    <ProfileProvider>
      <View style={styles.container}>
        <AppNavigator />
        <StatusBar style="auto" />
      </View>
    </ProfileProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
