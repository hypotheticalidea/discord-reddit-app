// src/screens/onboarding/InterestSelectionScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InterestCard from '../../components/onboarding/InterestCard';
import CustomButton from '../../components/common/CustomButton';
import UsernameDisplay from '../../components/onboarding/UsernameDisplay';
import { Colors } from '../../styles/Colors';
import { interestCategories, generateUsername } from '../../data/interests';

const InterestSelectionScreen = ({ navigation }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [generatedUsername, setGeneratedUsername] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInterestToggle = (interest) => {
    let newSelectedInterests;
    if (selectedInterests.find(item => item.id === interest.id)) {
      newSelectedInterests = selectedInterests.filter(item => item.id !== interest.id);
    } else {
      newSelectedInterests = [...selectedInterests, interest];
    }
    
    setSelectedInterests(newSelectedInterests);
    
    // Generate username when interests change
    if (newSelectedInterests.length > 0) {
      const username = generateUsername(newSelectedInterests);
      setGeneratedUsername(username);
    } else {
      setGeneratedUsername('');
    }
  };

  const handleRegenerateUsername = () => {
    if (selectedInterests.length === 0) {
      Alert.alert('Select Interests', 'Please select at least one interest to generate a username.');
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      const newUsername = generateUsername(selectedInterests);
      setGeneratedUsername(newUsername);
      setIsGenerating(false);
    }, 500);
  };

  const handleContinue = () => {
    if (selectedInterests.length === 0) {
      Alert.alert('Select Interests', 'Please select at least one interest to continue.');
      return;
    }

    // Navigate to real name input screen
    navigation.navigate('RealNameInput', {
      selectedInterests,
      generatedUsername,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>What interests you?</Text>
          <Text style={styles.subtitle}>
            Select topics you're passionate about. We'll create a unique username based on your interests!
          </Text>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '33%' }]} />
          </View>
          <Text style={styles.progressText}>Step 1 of 3</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Interest Selection */}
        <View style={styles.interestsGrid}>
          {interestCategories.map((interest) => (
            <InterestCard
              key={interest.id}
              interest={interest}
              isSelected={selectedInterests.some(item => item.id === interest.id)}
              onPress={() => handleInterestToggle(interest)}
              style={styles.interestCard}
            />
          ))}
        </View>

        {/* Username Preview */}
        {generatedUsername && (
          <UsernameDisplay
            username={generatedUsername}
            onRegenerate={handleRegenerateUsername}
            isGenerating={isGenerating}
          />
        )}

        {/* Selected Count */}
        <View style={styles.selectedContainer}>
          <Text style={styles.selectedText}>
            {selectedInterests.length} interest{selectedInterests.length !== 1 ? 's' : ''} selected
          </Text>
        </View>

        {/* Add some bottom padding for better scrolling */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Fixed Bottom Button */}
      <View style={styles.bottomContainer}>
        <CustomButton
          title="Continue"
          onPress={handleContinue}
          disabled={selectedInterests.length === 0}
          style={styles.continueButton}
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
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.discordGrayLight,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: Colors.discordGrayMedium,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.discordBlurple,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: Colors.discordGrayLight,
    marginTop: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  interestsGrid: {
    marginBottom: 20,
  },
  interestCard: {
    marginBottom: 12,
  },
  selectedContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 14,
    color: Colors.discordBlurple,
    fontWeight: '500',
  },
  bottomPadding: {
    height: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.discordGrayDark,
    borderTopWidth: 1,
    borderTopColor: Colors.discordGrayMedium,
  },
  continueButton: {
    marginBottom: 0,
  },
});

export default InterestSelectionScreen;
