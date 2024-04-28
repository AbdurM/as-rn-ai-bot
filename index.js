import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { initAPI, apiCall } from './api';

const AIChat = ({ apiToken }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        initAPI(apiToken)
    }, []);

    const onSend = async (freshMessages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, freshMessages),
        );

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
    }

    return (
        <SafeAreaView style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    name: 'User'
                }}
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