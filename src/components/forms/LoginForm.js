// src/components/forms/LoginForm.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import { validateEmail, validatePassword } from '../../utils/validators/authValidators';

const LoginForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
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
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        error={errors.password}
        secureTextEntry
      />

      <CustomButton
        title="Sign In"
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

export default LoginForm;
