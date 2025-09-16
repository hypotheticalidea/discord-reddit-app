// src/components/onboarding/UsernameDisplay.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';

const UsernameDisplay = ({ username, onRegenerate, isGenerating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your Generated Username</Text>
      <View style={styles.usernameContainer}>
        <View style={styles.usernameBox}>
          <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableOpacity
          style={styles.regenerateButton}
          onPress={onRegenerate}
          disabled={isGenerating}
        >
          <Ionicons 
            name="refresh" 
            size={20} 
            color={Colors.white}
            style={isGenerating && { opacity: 0.5 }} 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        This username will be visible on posts and in public chats. You can regenerate it anytime!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
    marginBottom: 12,
    textAlign: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  usernameBox: {
    backgroundColor: Colors.discordBlurple,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  regenerateButton: {
    backgroundColor: Colors.discordGrayMedium,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.discordGrayLight,
  },
  description: {
    fontSize: 12,
    color: Colors.discordGrayLight,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 16,
  },
});

export default UsernameDisplay;
