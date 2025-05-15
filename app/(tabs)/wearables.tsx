import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const WearablesScreen = () => (
  <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Wearable Data</Text>
    <ScrollView>
      <Text>🚶 Steps today: 5,432</Text>
      <Text>❤️ Heart rate: 72 bpm</Text>
      <Text>🛌 Sleep: 7 hrs 15 min</Text>
    </ScrollView>
  </SafeAreaView>
);

export default WearablesScreen;
