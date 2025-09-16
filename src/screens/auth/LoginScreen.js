// src/screens/auth/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import LoginForm from '../../components/forms/LoginForm';
import CustomButton from '../../components/common/CustomButton';
import { Colors } from '../../styles/Colors';

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (formData) => {
    setLoading(true);
    try {
      // Mock login logic - replace with real API call later
      console.log('Login attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful login
      Alert.alert('Success', 'Login successful!', [
        { text: 'OK', onPress: () => navigation.replace('MainApp') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Ionicons name="chatbubbles" size={60} color={Colors.discordBlurple} />
            </View>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Sign in to continue to your social hub
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <LoginForm onSubmit={handleLogin} loading={loading} />
            
            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Social Login Options */}
          <View style={styles.socialContainer}>
            <Text style={styles.orText}>Or continue with</Text>
            
            <View style={styles.socialButtons}>
              <CustomButton
                title="Google"
                variant="outline"
                style={styles.socialButton}
                onPress={() => Alert.alert('Coming Soon', 'Google login will be available soon!')}
              />
              <CustomButton
                title="Apple"
                variant="outline"
                style={styles.socialButton}
                onPress={() => Alert.alert('Coming Soon', 'Apple login will be available soon!')}
              />
            </View>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.discordGrayLight,
    textAlign: 'center',
    lineHeight: 22,
  },
  formContainer: {
    marginBottom: 32,
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: 16,
  },
  forgotPasswordText: {
    color: Colors.discordBlurple,
    fontSize: 14,
    fontWeight: '500',
  },
  socialContainer: {
    marginBottom: 32,
  },
  orText: {
    color: Colors.discordGrayLight,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  socialButton: {
    flex: 1,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: Colors.discordGrayLight,
    fontSize: 14,
  },
  signupLink: {
    color: Colors.discordBlurple,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;
