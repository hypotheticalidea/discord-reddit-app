// src/screens/common/MainAppScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/common/CustomButton';
import { Colors } from '../../styles/Colors';

const MainAppScreen = ({ navigation }) => {
  const handleLogout = () => {
    // For testing - go back to login
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🎉 Welcome to Your App!</Text>
        <Text style={styles.subtitle}>
          Authentication is working perfectly!
        </Text>
        <Text style={styles.description}>
          This is a temporary screen. Soon we'll add:
        </Text>
        
        <View style={styles.featureList}>
          <Text style={styles.feature}>• Discord-style chat interface</Text>
          <Text style={styles.feature}>• Reddit-style feed and posts</Text>
          <Text style={styles.feature}>• Server/community management</Text>
          <Text style={styles.feature}>• User profiles and settings</Text>
        </View>
        
        <CustomButton
          title="Logout (Test)"
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.discordGrayDark,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.discordBlurple,
    textAlign: 'center',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: Colors.discordGrayLight,
    textAlign: 'center',
    marginBottom: 20,
  },
  featureList: {
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  feature: {
    fontSize: 14,
    color: Colors.white,
    marginBottom: 8,
  },
  logoutButton: {
    width: '100%',
    maxWidth: 300,
  },
});

export default MainAppScreen;
