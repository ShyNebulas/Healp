import * as Location from 'expo-location';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chats from '../pages/Chats';
import DirectMessage from '../pages/DirectMessage';

import data from '../data/data.json';   

class ChatsNavigator extends React.Component {
    constructor(props) {
      super(props);
      this.state = { location: [null, null] }
    }

    componentDidMount() { this.getLocation(); }
    getScreens() {
        const screens = [];
        Object.values(data).forEach((entities) => {
            Object.values(entities).forEach((entity) => {
                screens.push({
                    name: entity.name,
                    messages: entity.messages
                });
            })
        });
        return screens;
    }
  
    async getLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if(status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        this.setState({ location: [location["coords"].latitude, location["coords"].longitude] });
      } 
    }
  
    render() {
        const Stack = createNativeStackNavigator();
        return(
            <Stack.Navigator>
                <Stack.Screen
                    component={Chats}
                    name="Chats"
                    options={{headerShown: false}}
                />
                {this.getScreens().map((screen) =>
                    <Stack.Screen
                        children={() => <DirectMessage location={this.state.location} messages={screen.messages} />}
                        name={screen.name}
                        options={{headerShown: false}}
                    />
                )}
            </Stack.Navigator>
        );
    }
}

export default ChatsNavigator;