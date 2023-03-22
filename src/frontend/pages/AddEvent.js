import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data
    }
  }

  addNewEvent() {
    this.state.data.push({
      id: this.state.data.length + 1,
      title: this.state.title,
      description: this.state.description,
      time: this.state.time,
      buttonText: 'Interested'
    });
    this.props.route.params.handler(this.state.data);
    this.props.navigation.navigate('Events');
  }

  render() {
    return(
      <View>
        <Text>Add a new event</Text>
        <TextInput placeholder="Title" value={this.state.title} onChangeText={(title) => this.setState({title})} />
        <TextInput placeholder="Description" value={this.state.description} onChangeText={(description) => this.setState({description})} />
        <TextInput placeholder="E.g : 3PM - 5PM" value={this.state.time} onChangeText={(time) => this.setState({time})} />
        <Button title="Add Event" onPress={() => this.addNewEvent()} />
      </View>
    );
  }
}

export default AddEvent;

