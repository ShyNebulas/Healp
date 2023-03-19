import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Chatsinfo from './src/frontend/pages/Chats';
import DirectMessage from './src/frontend/pages/DirectMessage';
import MapView from "react-native-maps";
import { Card } from 'react-native-elements';
import Events from './src/frontend/pages/Events';
import AddEventForm from './src/frontend/pages/AddEvent'

import data from './src/data/data.json';
// Remebers navigational path

function Home(){
  return(
    <View>
    <Text>Location:</Text>

    <Text>Interested Events:</Text>
    </View>
);
}

const Stack = createNativeStackNavigator();

function Chats(){
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
                <Stack.Navigator initialRouteName="Chats" independent="true">
                    <Stack.Screen name=" " component={Chatsinfo} />
                    {screens.map((screen) =>
                        <Stack.Screen name={screen.name} children={() => <DirectMessage messages={screen.messages} />} />
                    )}
                </Stack.Navigator>
        );
}

const StackEvent = createNativeStackNavigator();

function EventsScreen(){
      return (
          <NavigationContainer independent="true">
            <StackEvent.Navigator>
              <StackEvent.Screen name="Events" component={Events} />
              <StackEvent.Screen name="AddEvent" component={AddEventForm} />
            </StackEvent.Navigator>
          </NavigationContainer>
        );
};

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {

      // will probs need to put declartion that code is from react website just for safety
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen 
              name="Events" 
              component={EventsScreen}
              options={{
                tabBarLabel: 'Events',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="team" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen 
              name="Home" 
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-home-outline" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen 
              name="Chats" 
              component={Chats}
              options={{
                tabBarLabel: 'Chats',
                tabBarIcon: ({ color, size }) => (
                  <SimpleLineIcons name="speech" size={24} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

export default App;

/*
  - References: https://reactnavigation.org/docs/getting-started
*/

