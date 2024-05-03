# AS React Native AI Chat Bot Turbo 

Easy Plug and Play **Chat Component** which uses **OPEN AI turbo APIs behind the scenes**.

## Installation

```sh
npm install as-rn-ai-chat-turbo
```
-  Just needs open AI api key for gpt-3.5-turbo from [Open AI api](https://platform.openai.com/api-keys). 
- **Future releases will have an option to choose your gpt model**


## Future releases

- **This is just a basic version.** More updates to come soon related to customisation and more control on your ai model. 

## Example usage

```sh
import React from 'react';
import { apiKey } from './src/constants';
import AIChat from 'as-rn-ai-chat-turbo'
import { SafeAreaView } from 'react-native';

const App = () => {
  return <SafeAreaView style={ {flex: 1} }>
      <AIChat
        apiToken = {apiKey}
        userName = 'Abdur'
      />
    </SafeAreaView>
};

export default App;
```

