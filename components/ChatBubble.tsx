import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ChatBubbleProps {
  sender: 'user' | 'coach';
  text: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, text }) => {
  const isUser = sender === 'user';
  
  return (
    <View style={[
      styles.bubble, 
      isUser ? styles.userBubble : styles.coachBubble
    ]}>
      <Text style={isUser ? styles.userText : styles.coachText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 20,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#3B82F6',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  coachBubble: {
    backgroundColor: '#F3F4F6',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  userText: {
    color: 'white',
  },
  coachText: {
    color: 'black',
  },
});

export default ChatBubble;