import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ChatBubble from "../components/ChatBubble";

const HomeScreen = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chat, setChat] = useState<
    { sender: "user" | "coach"; text: string }[]
  >([
    {
      sender: "coach",
      text: "Hi! How can I support your lifestyle goals today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    // Add user message to chat
    const updatedChat: { sender: "user" | "coach"; text: string }[] = [
      ...chat,
      { sender: "user", text: userMessage },
    ];
    setChat(updatedChat);

    // Clear input and show loading
    setUserMessage("");
    setIsLoading(true);

    try {
      // Call the API
      const response = await fetch("http://192.168.0.3:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
      });

      const data = await response.json();
      const processText = (text: string) => {
        return text.replace(/\*\*(.*?)\*\*/g, "**$1**");
      };

      setChat([
        ...updatedChat,
        {
          sender: "coach",
          text:
            processText(data.answer) ||
            "Sorry, I could not process your request.",
        },
      ]);
    } catch (error) {
      console.error("API call failed:", error);
      setChat([
        ...updatedChat,
        {
          sender: "coach",
          text: "Sorry, there was an error processing your request.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {chat.map((msg, index) => (
          <ChatBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
        {isLoading && <ChatBubble sender="coach" text="Thinking..." />}
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 25,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginRight: 10,
          }}
          placeholder="Type your message..."
          value={userMessage}
          onChangeText={setUserMessage}
          editable={!isLoading}
        />
        <TouchableOpacity
          onPress={handleSend}
          style={{
            backgroundColor: isLoading ? "#ccc" : "#3B82F6",
            padding: 12,
            borderRadius: 25,
          }}
          disabled={isLoading || !userMessage.trim()}
        >
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
