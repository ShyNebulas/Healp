import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';

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
        <Text style={styles.topText}>Enter details for your new event:</Text>
        <TextInput style={styles.textIn} placeholder="Title" value={this.state.title} onChangeText={(title) => this.setState({title})} />
        <TextInput style={styles.textIn} placeholder="Description" value={this.state.description} onChangeText={(description) => this.setState({description})} />
        <TextInput style={styles.textIn} placeholder="E.g : 3PM - 5PM" value={this.state.time} onChangeText={(time) => this.setState({time})} />
        <TouchableOpacity style={styles.button} title="" onPress={() => this.addNewEvent()}>
            <Text style={styles.buttonText}> Add Event </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#2E86C1',
      padding: 10,
      borderRadius: 5,
      margin: 20,
      marginTop: 60,
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 20,
    },
    textIn: {
      padding: 10,
      borderRadius: 5,
      fontSize: 16,
      marginTop: 10,
      margin: 20,
      backgroundColor: '#DDD'
    },
    topText: {
      padding: 10,
      borderRadius: 5,
      fontSize: 16,
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 20,
    },
  });

export default AddEvent;

