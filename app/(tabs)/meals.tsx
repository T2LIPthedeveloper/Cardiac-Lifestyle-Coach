import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

const diabetesMeals = [
  {
    meal: "Breakfast",
    options: [
      "Overnight oats with cinnamon and berries (low GI)",
      "Greek yogurt with walnuts and chia seeds",
      "Vegetable egg white omelet with whole grain toast",
      "Steel-cut oatmeal with almond butter and apple slices",
      "Quinoa breakfast bowl with avocado and poached egg",
      "Cottage cheese with fresh peach slices and flaxseeds",
      "Whole grain toast with smashed avocado and tomato",
      "Berry protein smoothie with spinach",
      "Buckwheat pancakes with ricotta and berries",
      "Scrambled tofu with bell peppers and onions",
    ],
  },
  {
    meal: "Lunch",
    options: [
      "Grilled chicken salad with olive oil and lemon dressing",
      "Lentil soup with leafy greens",
      "Quinoa bowl with roasted vegetables and chickpeas",
      "Tuna salad with mixed greens and olive oil",
      "Turkey and avocado wrap with whole grain tortilla",
      "Mediterranean chickpea salad with feta",
      "Grilled salmon with asparagus and quinoa",
      "Vegetable and bean soup with a side salad",
      "Brown rice bowl with tofu and steamed vegetables",
      "Lettuce wraps with ground turkey and asian slaw",
    ],
  },
  {
    meal: "Dinner",
    options: [
      "Baked cod with roasted brussels sprouts",
      "Zucchini noodles with turkey meatballs",
      "Stuffed bell peppers with lean ground beef and brown rice",
      "Grilled salmon with steamed broccoli and sweet potato",
      "Bean and vegetable chili with small portion of brown rice",
      "Roasted chicken with mediterranean vegetables",
      "Baked tofu with cauliflower rice stir-fry",
      "Lentil pasta with vegetable sauce",
      "Shrimp and vegetable skewers with quinoa",
      "Turkey breast with roasted root vegetables",
    ],
  },
];

const hypertensionMeals = [
  {
    meal: "Breakfast",
    options: [
      "Overnight oats with banana and flaxseeds (no added salt)",
      "DASH diet smoothie: spinach, banana, berries, yogurt",
      "Egg white vegetable omelet with low-sodium cheese",
      "Whole grain cereal with low-fat milk and berries",
      "Oatmeal with cinnamon, apples and walnuts",
      "Avocado toast on whole grain bread with tomato",
      "Yogurt parfait with fresh fruit and unsalted nuts",
      "Whole grain pancakes with fresh fruit compote",
      "Chia seed pudding with unsweetened almond milk",
      "Low-sodium vegetable frittata with herbs",
    ],
  },
  {
    meal: "Lunch",
    options: [
      "Quinoa salad with fresh herbs and lemon dressing",
      "Grilled chicken with roasted vegetables (no added salt)",
      "Homemade vegetable soup with beans (low sodium)",
      "Tuna salad with olive oil, herbs, and whole grain crackers",
      "Turkey wrap with avocado and fresh vegetables",
      "Mediterranean lentil salad with fresh herbs",
      "Baked sweet potato topped with black beans and vegetables",
      "Grilled fish tacos with cabbage slaw",
      "Chickpea and vegetable stew with herbs",
      "Brown rice bowl with roasted vegetables and tahini sauce",
    ],
  },
  {
    meal: "Dinner",
    options: [
      "Baked cod with lemon and herbs, steamed asparagus",
      "Herb-roasted chicken with root vegetables",
      "Grilled salmon with dill and roasted brussels sprouts",
      "Vegetable and bean curry with brown rice",
      "Turkey meatloaf (low sodium) with mashed cauliflower",
      "Stuffed portobello mushrooms with quinoa and vegetables",
      "Lentil stew with low-sodium vegetable broth",
      "Zoodles with fresh tomato sauce and white beans",
      "Eggplant and chickpea stew with fresh herbs",
      "Baked tofu with ginger-sesame sauce and steamed vegetables",
    ],
  },
];

const MealsScreen = () => (
  <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
      Meal Recommendations
    </Text>
    <ScrollView>
      <Text>🥣 Breakfast: Oats with berries, chia seeds</Text>
      <Text>🍱 Lunch: Grilled tofu/chicken, brown rice, broccoli</Text>
      <Text>🍲 Dinner: Lentil soup, whole grain toast, salad</Text>
    </ScrollView>
  </SafeAreaView>
);

export default MealsScreen;
