import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/elements";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";

import ChatsNavigator from "./src/navigators/ChatsNavigator";
import EventsNavigator from "./src/navigators/EventsNavigator";
import Home from "./src/pages/Home";

const getChatHeaderState = (route) => {
  const name = getFocusedRouteNameFromRoute(route) ?? "Chats";
  return true ? name === "Chats" : false;
}

class App extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Events"
            component={EventsNavigator}
            options={{
              headerShown: false,
              tabBarIcon: () => ( <AntDesign color="black" name="team" size={24} /> ),
              tabBarLabel: "Events"
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => ( <Ionicons color="black" name="md-home-outline" size={24} /> ),
              tabBarLabel: "Home"
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatsNavigator}
            options={({ navigation, route }) => ({
              headerLeft: () => (
                <>
                  {!getChatHeaderState(route) &&
                    <HeaderBackButton onPress={() => navigation.navigate("Chats") } />
                  }
                </>
              ),
              headerTitle: getFocusedRouteNameFromRoute(route) ?? "Chats",
              tabBarIcon: () => ( <SimpleLineIcons color="black" name="speech" size={24} /> ),
              tabBarLabel: "Chats"
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;