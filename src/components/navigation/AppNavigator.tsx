// AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install react-native-vector-icons

// import HomeScreen from "../screens/HomeScreen";
// import RecommendedScreen from "../screens/RecommendScreen";
// import ProfileScreen from "../screens/Profile/ProfileScreen";
// import MyJobsScreen from "../screens/MyJobsScreen";
import LandingPage from "../screen/LandingScreen";
import LoginScreen from "../screen/Authorized Screen/LogInScreen";
import SignupScreen from "../screen/Authorized Screen/SignUpScreen";
// import InternshipDetails from "../Components/Internship/InternshipDetails";
// import EventsScreen from "../screens/Event/EventScreen";
// import ShowAllInternnship from "../Components/Internship/AllInternnship/ShowAllInternnship";

// Define types for the Stack Navigator
type RootStackParamList = {
  LandingScreen: undefined;
  LogInScreen: undefined;
  SignUpScreen: undefined;
  MainApp: undefined;
  InternshipDetails: undefined;
  AllInternships: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

// Main Tab Navigator for Home, Recommended, My Jobs, Profile
// function MainTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: keyof typeof Ionicons.glyphMap = "home";

//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "Recommended") {
//             iconName = focused ? "star" : "star-outline";
//           } else if (route.name === "Profile") {
//             iconName = focused ? "person" : "person-outline";
//           } else if (route.name === "My Jobs") {
//             iconName = focused ? "briefcase" : "briefcase-outline";
//           } else if (route.name === "Events") {
//             iconName = focused ? "calendar" : "calendar-outline";
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#4CAF50",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Recommended"
//         component={RecommendedScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="My Jobs"
//         component={MyJobsScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Events"
//         component={EventsScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ headerShown: false }}
//       />
//     </Tab.Navigator>
//   );
// }

// Create the Stack Navigator for Landing and Main App
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen
          name="LandingScreen"
          component={LandingPage}
          options={{ headerShown: false }} // Hide header for landing screen
        />
        <Stack.Screen
          name="LogInScreen"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for login screen
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignupScreen}
          options={{ headerShown: false }} // Hide header for signup screen
        />
        {/* Main app with tabs */}
        {/* <Stack.Screen
          name="MainApp"
          component={MainTabNavigator}
          options={{ headerShown: false }} // Hide header for main app
        /> */}
        {/* <Stack.Screen
          name="InternshipDetails"
          component={InternshipDetails}
          options={{ headerShown: true, title: "Internship Details" }} // Show header for details screen
        /> */}
        {/* <Stack.Screen
          name="AllInternships"
          component={ShowAllInternnship}
          options={{ headerShown: true }} // Show header for all internships
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
