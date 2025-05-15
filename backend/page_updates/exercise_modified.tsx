import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const exerciseData = [
  { 
    header: '☀️ Morning', 
    activities: '30 min walk at moderate pace, 10 min deep breathing exercises, 5 min gentle stretching'
  },
  { 
    header: '🕒 Afternoon', 
    activities: '15-20 min low-impact exercises (chair exercises, gentle resistance bands, water aerobics), blood pressure check before and after'
  },
  { 
    header: '🌙 Evening', 
    activities: 'Light yoga/stretching for 20 min, meditation for stress reduction, 10 min slow walking'
  },
  {
    header: '💪 Strength Training (2-3x/week)',
    activities: 'Light resistance training with proper breathing, focusing on major muscle groups, avoid holding breath during exertion'
  },
  {
    header: '🚲 Cardio Options',
    activities: 'Stationary biking, swimming, elliptical (moderate intensity - able to talk but not sing), monitor glucose before/during/after'
  },
  {
    header: '⚠️ Safety Tips',
    activities: 'Stay hydrated, check glucose before exercise if diabetic, stop if dizzy/faint/chest pain, wear proper footwear, start slow and progress gradually'
  }
];

const ExerciseScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f8fa' }}>
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {exerciseData.map((exercise, index) => (
        <View key={index} style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          borderLeftWidth: 5,
          borderLeftColor: '#3498db'
        }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginBottom: 8,
            color: '#2c3e50'
          }}>
            {exercise.header}
          </Text>
          <Text style={{ 
            lineHeight: 22, 
            color: '#555',
            fontSize: 15
          }}>
            {exercise.activities}
          </Text>
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default ExerciseScreen;