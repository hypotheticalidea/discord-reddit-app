// src/components/onboarding/InterestCard.js
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';

const InterestCard = ({ interest, isSelected, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        isSelected && styles.selectedCard,
        { borderColor: interest.color },
        isSelected && { backgroundColor: interest.color + '20' },
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>{interest.icon}</Text>
        <Text style={[styles.name, isSelected && styles.selectedName]}>
          {interest.name}
        </Text>
        <View style={styles.topicsContainer}>
          {interest.topics.slice(0, 3).map((topic, index) => (
            <Text key={index} style={styles.topic}>
              {topic}
            </Text>
          ))}
          {interest.topics.length > 3 && (
            <Text style={styles.moreTopic}>+{interest.topics.length - 3} more</Text>
          )}
        </View>
      </View>
      {isSelected && (
        <View style={[styles.checkmark, { backgroundColor: interest.color }]}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.discordGrayMedium,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Colors.discordGrayLight,
    position: 'relative',
  },
  selectedCard: {
    borderWidth: 2,
    elevation: 4,
    // Fixed: Replace shadow* properties with boxShadow for web compatibility
    boxShadow: '0px 2px 4px rgba(114, 137, 218, 0.25)',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 32,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  selectedName: {
    color: Colors.white,
  },
  topicsContainer: {
    alignItems: 'center',
  },
  topic: {
    fontSize: 12,
    color: Colors.discordGrayLight,
    marginBottom: 2,
  },
  moreTopic: {
    fontSize: 12,
    color: Colors.discordBlurple,
    fontWeight: '500',
  },
  checkmark: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default InterestCard;
