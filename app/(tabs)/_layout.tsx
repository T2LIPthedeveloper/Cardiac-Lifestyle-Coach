import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="meals" options={{ title: 'Meals', tabBarIcon: ({ color, size }) => <Ionicons name="fast-food" size={size} color={color} /> }} />
      <Tabs.Screen name="exercise" options={{ title: 'Exercise', tabBarIcon: ({ color, size }) => <Ionicons name="barbell" size={size} color={color} /> }} />
      <Tabs.Screen name="wearables" options={{ title: 'Wearables', tabBarIcon: ({ color, size }) => <Ionicons name="watch" size={size} color={color} /> }} />
    </Tabs>
  );
}

