import axios from 'axios';

const client = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});

export const initAPI = (apiKey) => {
    client.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
}

const chatGptEndPoint = 'https://api.openai.com/v1/chat/completions'
const dalleEndpoint = 'https://api.openai.com/v1/images/generations'

export const apiCall = async (messages) => {
    try {
        const response = await client.post(chatGptEndPoint, {
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": messages[0].text
                }
            ]
        })

        return response.data.choices[0].message.content;

    } catch (err) {
        console.log('error ', err)
        return Promise.resolve({
            success: false,
            msg: err.message
        })

    }

};
