import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MealsScreen from '../screens/MealsScreen';
import ExerciseScreen from '../app/(tabs)/exercise';
import WearablesScreen from '../app/(tabs)/wearables';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Meals') iconName = 'restaurant';
          else if (route.name === 'Exercise') iconName = 'barbell';
          else if (route.name === 'Wearables') iconName = 'watch';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Meals" component={MealsScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
      <Tab.Screen name="Wearables" component={WearablesScreen} />
    </Tab.Navigator>
  );
}
