import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddEvent from "../pages/AddEvent";
import Events from "../pages/Events";

import data from "../data/events.json";

class EventsNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data }
    this.updateData = this.updateData.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    return this.state.data;
  }

  updateData(data) {
    this.setState({ data: data }); 
  }

  render() {
    const Stack = createNativeStackNavigator();
    return(
      <Stack.Navigator initialRouteName="Events" independent="true">
        <Stack.Screen component={Events} initialParams={{ data: this.state.data, getData: this.getData}} name="Events" />
        <Stack.Screen component={AddEvent} initialParams={{ data: this.state.data, updateData: this.updateData}} name="AddEvent" />
      </Stack.Navigator>
    );
  }
}

export default EventsNavigator;