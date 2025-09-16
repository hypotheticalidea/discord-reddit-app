// src/navigation/OnboardingNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InterestSelectionScreen from '../screens/onboarding/InterestSelectionScreen';
import RealNameInputScreen from '../screens/onboarding/RealNameInputScreen';
import OnboardingCompleteScreen from '../screens/onboarding/OnboardingCompleteScreen';

const Stack = createStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="InterestSelection"
    >
      <Stack.Screen name="InterestSelection" component={InterestSelectionScreen} />
      <Stack.Screen name="RealNameInput" component={RealNameInputScreen} />
      <Stack.Screen name="OnboardingComplete" component={OnboardingCompleteScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
