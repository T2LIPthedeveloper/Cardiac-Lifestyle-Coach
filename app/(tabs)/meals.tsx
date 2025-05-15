import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const MealsScreen = () => (
  <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Meal Recommendations</Text>
    <ScrollView>
      <Text>🥣 Breakfast: Oats with berries, chia seeds</Text>
      <Text>🍱 Lunch: Grilled tofu/chicken, brown rice, broccoli</Text>
      <Text>🍲 Dinner: Lentil soup, whole grain toast, salad</Text>
    </ScrollView>
  </SafeAreaView>
);

export default MealsScreen;