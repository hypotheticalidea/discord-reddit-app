// src/screens/onboarding/OnboardingCompleteScreen.js
import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/common/CustomButton';
import { Colors } from '../../styles/Colors';

const OnboardingCompleteScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.5)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleGetStarted = () => {
    // Navigate to main app
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainApp', params: { userProfile } }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        style={[
          styles.content, 
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }] 
          }
        ]}
      >
        {/* Success Animation */}
        <View style={styles.successContainer}>
          <View style={styles.checkmarkContainer}>
            <Ionicons name="checkmark-circle" size={80} color={Colors.success} />
          </View>
          <Text style={styles.title}>You're all set!</Text>
          <Text style={styles.subtitle}>
            Welcome to the community, {userProfile.realName.first}!
          </Text>
        </View>

        {/* Profile Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Your Profile Summary</Text>
            
            <View style={styles.profileRow}>
              <Text style={styles.profileLabel}>Public Username:</Text>
              <View style={styles.usernameTag}>
                <Text style={styles.profileValue}>{userProfile.publicUsername}</Text>
              </View>
            </View>
            
            <View style={styles.profileRow}>
              <Text style={styles.profileLabel}>Real Name (Private):</Text>
              <Text style={styles.profileValue}>
                {userProfile.realName.first} {userProfile.realName.last}
              </Text>
            </View>
            
            <View style={styles.profileRow}>
              <Text style={styles.profileLabel}>Interests:</Text>
              <Text style={styles.profileValue}>
                {userProfile.interests.length} selected
              </Text>
            </View>
          </View>
        </View>

        {/* Features Preview */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>What's Next?</Text>
          <View style={styles.featuresList}>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>🏠</Text>
              <Text style={styles.featureText}>Explore communities based on your interests</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>💬</Text>
              <Text style={styles.featureText}>Join conversations and make new connections</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>📝</Text>
              <Text style={styles.featureText}>Share posts with your public username</Text>
            </View>
          </View>
        </View>

        {/* Get Started Button */}
        <CustomButton
          title="Let's Get Started!"
          onPress={handleGetStarted}
          style={styles.startButton}
        />
      </Animated.View>
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
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  checkmarkContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.discordGrayLight,
    textAlign: 'center',
  },
  summaryContainer: {
    marginBottom: 32,
  },
  summaryCard: {
    backgroundColor: Colors.discordGrayMedium,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.discordGrayLight,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileLabel: {
    fontSize: 14,
    color: Colors.discordGrayLight,
    flex: 1,
  },
  profileValue: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  usernameTag: {
    backgroundColor: Colors.discordBlurple,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  featuresList: {
    gap: 12,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.discordGrayMedium,
    padding: 12,
    borderRadius: 12,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: Colors.white,
    flex: 1,
  },
  startButton: {
    backgroundColor: Colors.success,
  },
});

export default OnboardingCompleteScreen;
