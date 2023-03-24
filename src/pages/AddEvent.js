import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../styles";

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data
    }
  }

  addNewEvent() {
    this.props.route.params.updateData(
      Object.assign({[this.state.title]: {
        "description": [this.state.description],
        "time": [this.state.time]
      }}, this.state.data)
    );
    this.props.navigation.navigate("Events");
  }

  render() {
    return(
      <View>
        <Text style={styles.addEventCreate}>Enter details for your new event:</Text>
        <TextInput placeholder="Title" onChangeText={(title) => this.setState({title})} style={styles.addEventField} value={this.state.title}/>
        <TextInput placeholder="Description" onChangeText={(description) => this.setState({description})} style={styles.addEventField} value={this.state.description} />
        <TextInput placeholder="E.g : 3PM - 5PM" onChangeText={(time) => this.setState({time})} style={styles.addEventField} value={this.state.time} />
        <TouchableOpacity onPress={() => this.addNewEvent()} style={styles.addEventButton}>
            <Text style={styles.addEventButtonText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddEvent;

