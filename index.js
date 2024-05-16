import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { initAPI, apiCall } from './api';
import colors from './constants/colors';

const AIChat = ({ apiToken, userName, aiBubbleColor, userBubbleColor, onError }) => {
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
        let messageToAdd = {}
        try {
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, freshMessages),
            );
            setIsTyping(true);

            const apiResponse = await apiCall(freshMessages);

            messageToAdd = {
                _id: messages.length + 1,
                text: apiResponse,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'AI',
                }
            }

        } catch (e) {
            messageToAdd = {
                _id: messages.length + 1,
                text: sendFailedError,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'AI',
                }
            }
            onError(e)
        }
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messageToAdd),
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