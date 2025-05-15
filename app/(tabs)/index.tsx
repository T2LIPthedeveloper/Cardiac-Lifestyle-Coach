import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import ChatBubble from '../components/ChatBubble';

const HomeScreen = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chat, setChat] = useState<{ sender: 'user' | 'coach'; text: string }[]>([
    { sender: 'coach', text: 'Hi! How can I support your lifestyle goals today?' },
  ]);

  const handleSend = () => {
    if (!userMessage.trim()) return;
    const newChat: { sender: 'user' | 'coach'; text: string }[] = [
      ...chat,
      { sender: 'user', text: userMessage },
      { sender: 'coach', text: 'Thanks! I will personalize your suggestions.' },
    ];
    setChat(newChat);
    setUserMessage('');
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {chat.map((msg, index) => (
          <ChatBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, marginRight: 10 }}
          placeholder="Type your message..."
          value={userMessage}
          onChangeText={setUserMessage}
        />
        <TouchableOpacity onPress={handleSend} style={{ backgroundColor: '#3B82F6', padding: 12, borderRadius: 25 }}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;