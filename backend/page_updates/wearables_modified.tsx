import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

// Mock data - in a real app this would come from API or state management
const wearableData = {
  steps: 5432,
  heartRate: 72,
  sleepHours: 7,
  sleepMinutes: 15
};

const colors = {
  primary: '#2563eb',
  secondary: '#dc2626',
  success: '#059669',
  warning: '#d97706',
  background: '#f3f4f6',
  cardBg: '#ffffff',
  textPrimary: '#111827',
  textSecondary: '#4b5563',
  steps: '#047857',
  heartRate: '#b91c1c',
  sleep: '#4338ca'
};

const WearablesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ padding: 16 }}>
        {/* Activity Card */}
        <View style={{ backgroundColor: colors.cardBg, borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: colors.textSecondary, shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.textPrimary }}>🚶 Daily Activity</Text>
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.steps, marginBottom: 5 }}>
            {wearableData.steps.toLocaleString()}
          </Text>
          <Text style={{ color: colors.textSecondary }}>steps today</Text>
          {wearableData.steps < 10000 ? (
            <Text style={{ color: colors.warning, marginTop: 5, fontStyle: 'italic' }}>
              Try to reach 10,000 steps for optimal cardiovascular health
            </Text>
          ) : (
            <Text style={{ color: colors.success, marginTop: 5, fontStyle: 'italic' }}>
              Great job! You've reached the recommended daily step count
            </Text>
          )}
        </View>
        
        {/* Heart Rate Card */}
        <View style={{ backgroundColor: colors.cardBg, borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: colors.textSecondary, shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.textPrimary }}>❤️ Heart Rate</Text>
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.heartRate, marginBottom: 5 }}>
            {wearableData.heartRate}
          </Text>
          <Text style={{ color: colors.textSecondary }}>beats per minute</Text>
          {wearableData.heartRate < 60 ? (
            <Text style={{ color: colors.primary, marginTop: 5, fontStyle: 'italic' }}>
              Your resting heart rate indicates excellent cardiovascular fitness
            </Text>
          ) : wearableData.heartRate < 100 ? (
            <Text style={{ color: colors.success, marginTop: 5, fontStyle: 'italic' }}>
              Your heart rate is within the normal resting range
            </Text>
          ) : (
            <Text style={{ color: colors.warning, marginTop: 5, fontStyle: 'italic' }}>
              Your heart rate is elevated. Consider relaxation techniques
            </Text>
          )}
        </View>
        
        {/* Sleep Card */}
        <View style={{ backgroundColor: colors.cardBg, borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: colors.textSecondary, shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.textPrimary }}>🛌 Sleep</Text>
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.sleep, marginBottom: 5 }}>
            {wearableData.sleepHours}h {wearableData.sleepMinutes}m
          </Text>
          <Text style={{ color: colors.textSecondary }}>last night</Text>
          {wearableData.sleepHours < 7 ? (
            <Text style={{ color: colors.warning, marginTop: 5, fontStyle: 'italic' }}>
              Try to get 7-9 hours of sleep for better heart health
            </Text>
          ) : (
            <Text style={{ color: colors.success, marginTop: 5, fontStyle: 'italic' }}>
              Good sleep duration! Quality sleep improves heart health
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WearablesScreen;
