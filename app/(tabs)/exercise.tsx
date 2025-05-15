import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

// Define exercise data separately
const exerciseData = [
  {
    header: "☀️ Morning",
    activities:
      "30 min walk at moderate pace, 10 min deep breathing exercises, 5 min gentle stretching",
  },
  {
    header: "🕒 Afternoon",
    activities:
      "15-20 min low-impact exercises (chair exercises, gentle resistance bands, water aerobics), blood pressure check before and after",
  },
  {
    header: "🌙 Evening",
    activities:
      "Light yoga/stretching for 20 min, meditation for stress reduction, 10 min slow walking",
  },
  {
    header: "💪 Strength Training (2-3x/week)",
    activities:
      "Light resistance training with proper breathing, focusing on major muscle groups, avoid holding breath during exertion",
  },
  {
    header: "🚲 Cardio Options",
    activities:
      "Stationary biking, swimming, elliptical (moderate intensity - able to talk but not sing), monitor glucose before/during/after",
  },
  {
    header: "⚠️ Safety Tips",
    activities:
      "Stay hydrated, check glucose before exercise if diabetic, stop if dizzy/faint/chest pain, wear proper footwear, start slow and progress gradually",
  },
];

const ExerciseScreen = () => (
  <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
      Exercise Suggestions
    </Text>
    <ScrollView>
      {exerciseData.map((exercise, index) => (
        <Text key={index}>
          {exercise.header}: {exercise.activities}
        </Text>
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default ExerciseScreen;
