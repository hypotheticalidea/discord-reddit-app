// src/screens/onboarding/RealNameInputScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../../components/common/CustomTextInput';
import CustomButton from '../../components/common/CustomButton';
import { Colors } from '../../styles/Colors';

const RealNameInputScreen = ({ navigation, route }) => {
  const { selectedInterests, generatedUsername } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateName = (name) => {
    return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
  };

  const handleComplete = async () => {
    if (!validateName(firstName)) {
      setError('First name must be at least 2 characters and contain only letters');
      return;
    }

    if (!validateName(lastName)) {
      setError('Last name must be at least 2 characters and contain only letters');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Mock user profile creation
      const userProfile = {
        publicUsername: generatedUsername,
        realName: {
          first: firstName.trim(),
          last: lastName.trim(),
        },
        interests: selectedInterests,
        createdAt: new Date().toISOString(),
      };

      console.log('Creating user profile:', userProfile);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to welcome screen
      navigation.navigate('OnboardingComplete', {
        userProfile,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to create your profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>What's your name?</Text>
            <Text style={styles.subtitle}>
              This will only be visible to people you choose to message directly. Your public posts will show "{generatedUsername}"
            </Text>
          </View>

          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '66%' }]} />
            </View>
            <Text style={styles.progressText}>Step 2 of 3</Text>
          </View>

          {/* Username Preview */}
          <View style={styles.usernamePreview}>
            <Text style={styles.previewLabel}>Your public username:</Text>
            <View style={styles.usernameBox}>
              <Text style={styles.username}>{generatedUsername}</Text>
            </View>
          </View>

          {/* Name Input */}
          <View style={styles.formContainer}>
            <CustomTextInput
              label="First Name"
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={(text) => {
                setFirstName(text);
                if (error) setError('');
              }}
              autoCapitalize="words"
            />
            
            <CustomTextInput
              label="Last Name"
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={(text) => {
                setLastName(text);
                if (error) setError('');
              }}
              autoCapitalize="words"
            />

            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>

          {/* Privacy Note */}
          <View style={styles.privacyNote}>
            <Text style={styles.privacyText}>
              🔒 Your real name is private and will only be shown in direct messages with people you choose to chat with personally.
            </Text>
          </View>

          {/* Continue Button */}
          <CustomButton
            title="Complete Setup"
            onPress={handleComplete}
            loading={loading}
            disabled={!firstName.trim() || !lastName.trim()}
            style={styles.completeButton}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.discordGrayDark,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
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
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 24,
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
  usernamePreview: {
    alignItems: 'center',
    marginBottom: 32,
  },
  previewLabel: {
    fontSize: 14,
    color: Colors.discordGrayLight,
    marginBottom: 8,
  },
  usernameBox: {
    backgroundColor: Colors.discordBlurple,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  formContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 14,
    color: Colors.error,
    textAlign: 'center',
    marginTop: 8,
  },
  privacyNote: {
    backgroundColor: Colors.discordGrayMedium,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  privacyText: {
    fontSize: 14,
    color: Colors.discordGrayLight,
    textAlign: 'center',
    lineHeight: 20,
  },
  completeButton: {
    marginBottom: 10,
  },
});

export default RealNameInputScreen;
