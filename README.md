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
import { SafeAreaView } from 'react-native';
import  AIChat from 'as-rn-ai-chat-turbo'

const App = () => {
  return <SafeAreaView style={ {flex: 1} }>
      <AIChat
      apiToken={apiKey}
      userBubbleColor='orange'
      aiBubbleColor='green'
      />
    </SafeAreaView>
};

export default App;
```
## Props

- **`apiToken`** _(String)_ - open AI api key for gpt-3.5-turbo from [Open AI api](https://platform.openai.com/api-keys). This is very important as it won't work without it.
- **`userBubbleColor`** _(String)_ - set the user bubble color. Has a default color of blue
- **`aiBubbleColor`** _(String)_ - set the user bubble color. Has a default color of light grey
- **`userName`** _(String)_ - set the user name
