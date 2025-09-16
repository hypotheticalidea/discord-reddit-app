// src/components/forms/SignupForm.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import { validateEmail, validatePassword } from '../../utils/validators/authValidators';

const SignupForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <CustomTextInput
        label="Password"
        placeholder="Create a password"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        error={errors.password}
        secureTextEntry
      />
      
      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChangeText={(value) => handleInputChange('confirmPassword', value)}
        error={errors.confirmPassword}
        secureTextEntry
      />

      <CustomButton
        title="Create Account"
        onPress={handleSubmit}
        loading={loading}
        style={styles.submitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  submitButton: {
    marginTop: 8,
  },
});

export default SignupForm;
