import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';

// Define types for the navigation
type RootStackParamList = {
  Home: undefined;
  Listings: undefined;
};

type RootTabParamList = {
  HomeTab: undefined;
  Listings: undefined;
  Chat: undefined;
  Profile: undefined;
};

// Placeholder for Firebase config
// Replace with your own Firebase config in production
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
// Commented out to avoid errors from invalid config
// const app = initializeApp(firebaseConfig);

// Create navigators
const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Home Screen
type HomeScreenProps = {
  navigation: any; // Using any for simplicity, but ideally should use proper navigation typing
};

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Climbing Pass Marketplace</Text>
      <Text style={styles.subtitle}>Find and sell unused gym passes</Text>
      <Button 
        title="View Listings" 
        onPress={() => navigation.navigate('Listings')} 
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Listings Screen
function ListingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Available Passes</Text>
      <Text style={styles.subtitle}>No listings yet</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Profile Screen
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>Sign in to access your profile</Text>
      <Button 
        title="Sign In" 
        onPress={() => alert('Sign In')} 
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Chat Screen
function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>No messages yet</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Home Stack
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Listings" component={ListingsScreen} />
    </Stack.Navigator>
  );
}

// Main App component with bottom tabs
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack} 
          options={{ 
            headerShown: false,
            title: 'Home'
          }} 
        />
        <Tab.Screen 
          name="Listings" 
          component={ListingsScreen} 
          options={{ title: 'Browse' }} 
        />
        <Tab.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ title: 'Messages' }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
}); 