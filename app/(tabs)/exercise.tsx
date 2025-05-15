import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const ExerciseScreen = () => (
  <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Exercise Suggestions</Text>
    <ScrollView>
      <Text>☀️ Morning: 30 min walk, 10 min breathing</Text>
      <Text>🕒 Afternoon: 15 min bodyweight workout</Text>
      <Text>🌙 Evening: Light yoga/stretching for 20 min</Text>
    </ScrollView>
  </SafeAreaView>
);

export default ExerciseScreen;