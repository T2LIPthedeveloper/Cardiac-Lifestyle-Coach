import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ChatBubbleProps = {
  sender: 'user' | 'coach';
  text: string;
};

const ChatBubble = ({ sender, text }: ChatBubbleProps) => {
  const isUser = sender === 'user';
  
  return (
    <View style={[
      styles.bubble, 
      isUser ? styles.userBubble : styles.coachBubble
    ]}>
      <Text style={[
        styles.text,
        isUser ? styles.userText : styles.coachText
      ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 18,
    marginVertical: 6,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#3B82F6',
  },
  coachBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3F4F6',
  },
  text: {
    fontSize: 16,
  },
  userText: {
    color: 'white',
  },
  coachText: {
    color: 'black',
  },
});

export default ChatBubble;