import React from 'react';
import { Text, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Chats from './src/frontend/pages/Chats';
import DirectMessage from './src/frontend/pages/DirectMessage';
import Events from './src/frontend/pages/Events';
import AddEvent from './src/frontend/pages/AddEvent';

import {SafeAreaView, StyleSheet} from 'react-native';
import Carousel from './src/frontend/components/Carousel.js'

import data from './src/data/data.json';

const getChatsTitle = (route) => {
  return getFocusedRouteNameFromRoute(route) ?? 'Chats';
}

const getChatHeaderState = (route) => {
  const name = getFocusedRouteNameFromRoute(route) ?? 'Chats';
  return true ? name === 'Chats' : false;
}

const ChatsStack = createNativeStackNavigator();
class ChatsPage extends React.Component {
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
    return(
      <ChatsStack.Navigator>
        <ChatsStack.Screen
          name="Chats"
          component={Chats}
          options={{headerShown: false}}
        />
        {screens.map((screen) =>
          <ChatsStack.Screen
            name={screen.name}
            children={() => <DirectMessage messages={screen.messages} />}
            options={{headerShown: false}}
          />
        )}
      </ChatsStack.Navigator>
    );
  }
}

const EventsStack = createNativeStackNavigator();
class EventsPage extends React.Component {
  render() {
    return(
      <EventsStack.Navigator initialRouteName="Events" independent="true">
        <EventsStack.Screen name="Events" component={Events} />
        <EventsStack.Screen name="AddEvent" component={AddEvent} />
      </EventsStack.Navigator>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return(
      <View>
        <StatusBar style="auto" />
        <SafeAreaView style = {styles.container}>
          <Carousel />
        </SafeAreaView>
        <Text>Interested Events:</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        backgroundColour: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        padding: 50
    },
}

const AppTab = createBottomTabNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppTab.Navigator>
          <AppTab.Screen
            name="Events"
            component={EventsPage}
            options={{
              tabBarLabel: 'Events',
              tabBarIcon: () => (
                <AntDesign name="team" size={24} color="black" />
              ),
              headerShown: false
            }}
          />
          <AppTab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Ionicons name="md-home-outline" size={24} color="black" />
              )
            }}
          />
          <AppTab.Screen
            name="Chat"
            component={ChatsPage}
            options={({ route, navigation }) => ({
              headerTitle: getChatsTitle(route),
              headerLeft: () => (
                <>
                  {!getChatHeaderState(route) &&
                    <HeaderBackButton onPress={() => navigation.navigate('Chats') } />
                  }
                </>
              ),
              tabBarLabel: 'Chats',
              tabBarIcon: () => (
                <SimpleLineIcons name="speech" size={24} color="black" />
              )
            })}
          />
        </AppTab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

/*
  - References: https://reactnavigation.org/docs/getting-started
*/
