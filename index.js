import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { initAPI, apiCall } from './api';
import colors from './colors';

const AIChat = ({ apiToken, userName, aiBubbleColor, userBubbleColor }) => {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        initAPI(apiToken)
    }, []);

    renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: userBubbleColor ?? colors.userBubbleDefaultColor
                    },
                    left: {
                        backgroundColor: aiBubbleColor ?? colors.aiBubbleDefaultColor
                    }
                }}
            />
        )
    }

    const onSend = async (freshMessages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, freshMessages),
        );
        setIsTyping(true);

        const apiResponse = await apiCall(freshMessages);

        const aiMessage = {
            _id: messages.length + 1,
            text: apiResponse,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'AI',
            }
        }

        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, aiMessage),
        );
        setIsTyping(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                isTyping={isTyping}
                user={{
                    _id: 1,
                    name: userName ?? 'User'
                }}
                renderBubble={renderBubble}
            />
        </SafeAreaView>
    )
}

export default AIChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});