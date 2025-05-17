import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

// Separate data from UI
const diabetesMeals = [
  { 
    meal: 'Breakfast', 
    options: [
      'Overnight oats with cinnamon and berries (low GI)',
      'Greek yogurt with walnuts and chia seeds',
      'Vegetable egg white omelet with whole grain toast',
      'Steel-cut oatmeal with almond butter and apple slices',
      'Quinoa breakfast bowl with avocado and poached egg',
      'Cottage cheese with fresh peach slices and flaxseeds',
      'Whole grain toast with smashed avocado and tomato',
      'Berry protein smoothie with spinach',
      'Buckwheat pancakes with ricotta and berries',
      'Scrambled tofu with bell peppers and onions'
    ]
  },
  { 
    meal: 'Lunch', 
    options: [
      'Grilled chicken salad with olive oil and lemon dressing',
      'Lentil soup with leafy greens',
      'Quinoa bowl with roasted vegetables and chickpeas',
      'Tuna salad with mixed greens and olive oil',
      'Turkey and avocado wrap with whole grain tortilla',
      'Mediterranean chickpea salad with feta',
      'Grilled salmon with asparagus and quinoa',
      'Vegetable and bean soup with a side salad',
      'Brown rice bowl with tofu and steamed vegetables',
      'Lettuce wraps with ground turkey and asian slaw'
    ]
  },
  { 
    meal: 'Dinner', 
    options: [
      'Baked cod with roasted brussels sprouts',
      'Zucchini noodles with turkey meatballs',
      'Stuffed bell peppers with lean ground beef and brown rice',
      'Grilled salmon with steamed broccoli and sweet potato',
      'Bean and vegetable chili with small portion of brown rice',
      'Roasted chicken with mediterranean vegetables',
      'Baked tofu with cauliflower rice stir-fry',
      'Lentil pasta with vegetable sauce',
      'Shrimp and vegetable skewers with quinoa',
      'Turkey breast with roasted root vegetables'
    ]
  }
];

const hypertensionMeals = [
  { 
    meal: 'Breakfast', 
    options: [
      'Overnight oats with banana and flaxseeds (no added salt)',
      'DASH diet smoothie: spinach, banana, berries, yogurt',
      'Egg white vegetable omelet with low-sodium cheese',
      'Whole grain cereal with low-fat milk and berries',
      'Oatmeal with cinnamon, apples and walnuts',
      'Avocado toast on whole grain bread with tomato',
      'Yogurt parfait with fresh fruit and unsalted nuts',
      'Whole grain pancakes with fresh fruit compote',
      'Chia seed pudding with unsweetened almond milk',
      'Low-sodium vegetable frittata with herbs'
    ]
  },
  { 
    meal: 'Lunch', 
    options: [
      'Quinoa salad with fresh herbs and lemon dressing',
      'Grilled chicken with roasted vegetables (no added salt)',
      'Homemade vegetable soup with beans (low sodium)',
      'Tuna salad with olive oil, herbs, and whole grain crackers',
      'Turkey wrap with avocado and fresh vegetables',
      'Mediterranean lentil salad with fresh herbs',
      'Baked sweet potato topped with black beans and vegetables',
      'Grilled fish tacos with cabbage slaw',
      'Chickpea and vegetable stew with herbs',
      'Brown rice bowl with roasted vegetables and tahini sauce'
    ]
  },
  { 
    meal: 'Dinner', 
    options: [
      'Baked cod with lemon and herbs, steamed asparagus',
      'Herb-roasted chicken with root vegetables',
      'Grilled salmon with dill and roasted brussels sprouts',
      'Vegetable and bean curry with brown rice',
      'Turkey meatloaf (low sodium) with mashed cauliflower',
      'Stuffed portobello mushrooms with quinoa and vegetables',
      'Lentil stew with low-sodium vegetable broth',
      'Zoodles with fresh tomato sauce and white beans',
      'Eggplant and chickpea stew with fresh herbs',
      'Baked tofu with ginger-sesame sauce and steamed vegetables'
    ]
  }
];

// Helper function to get meal emoji
const getMealEmoji = (mealType: string): string => {
  switch(mealType) {
    case 'Breakfast': return '🥣';
    case 'Lunch': return '🍱';
    case 'Dinner': return '🍲';
    default: return '';
  }
};

// Define type for meal category
interface MealCategory {
  meal: string;
  options: string[];
}

// Component to render meal category
const MealCategory = ({ category, prefix = '' }: { category: MealCategory, prefix?: string }) => (
  <React.Fragment>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 12, marginBottom: 4 }}>
      {getMealEmoji(category.meal)} {category.meal}
    </Text>
    {category.options.map((option, index) => (
      <Text key={`${prefix}-${index}`} style={{ marginLeft: 12, marginBottom: 4, lineHeight: 20 }}>
        • {option}
      </Text>
    ))}
  </React.Fragment>
);

const MealsScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f8fa' }}>
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      
      <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginVertical: 12,
        color: '#2c3e50' 
      }}>
        For Diabetes Management
      </Text>
      {diabetesMeals.map((category, index) => (
        <View key={`diabetes-${category.meal}`} style={{
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
            {getMealEmoji(category.meal)} {category.meal}
          </Text>
          {category.options.map((option, idx) => (
            <Text key={`diabetes-${category.meal}-${idx}`} 
              style={{ 
                marginLeft: 8, 
                marginBottom: 6, 
                lineHeight: 22,
                color: '#555',
                fontSize: 15
              }}>
              • {option}
            </Text>
          ))}
        </View>
      ))}

      <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginVertical: 12,
        color: '#2c3e50' 
      }}>
        For Hypertension Management
      </Text>
      {hypertensionMeals.map((category, index) => (
        <View key={`hypertension-${category.meal}`} style={{
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
          borderLeftColor: '#e74c3c'
        }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginBottom: 8,
            color: '#2c3e50'
          }}>
            {getMealEmoji(category.meal)} {category.meal}
          </Text>
          {category.options.map((option, idx) => (
            <Text key={`hypertension-${category.meal}-${idx}`} 
              style={{ 
                marginLeft: 8, 
                marginBottom: 6, 
                lineHeight: 22,
                color: '#555',
                fontSize: 15
              }}>
              • {option}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default MealsScreen;