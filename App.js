import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chats from './src/frontend/pages/Chats';
import DirectMessage from './src/frontend/pages/DirectMessage';

import data from './src/data/data.json';
// Remebers navigational path
const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    const screens = [];
    Object.values(data).forEach((entities) => {
      Object.values(entities).forEach((entity) => {
        screens.push({
          name: entity.name,
          messages: entity.messages
        });
      })
    });
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Chats">
          <Stack.Screen name="Chats" component={Chats} />
          {screens.map((screen) => 
            <Stack.Screen name={screen.name} children={() => <DirectMessage messages={screen.messages} />} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

/*
  - References: https://reactnavigation.org/docs/getting-started
*/




