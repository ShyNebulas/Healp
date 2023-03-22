import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import catImage from "../assets/cat.jpg";

class Block extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      registered: false,
      style: {
        backgroundColor: '#2E86C1',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
      },
      text: 'Interested?'
    }
  } 

  toggleRegistered() {
    if(this.state.registered) {
      this.setState({
        registered: false,
        style: {
          backgroundColor: '#2E86C1',
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        },
        text: 'Interested?'
      });
    } else {
      this.setState({
        registered: true,
        style: {
          backgroundColor: 'lightgreen',
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        },
        text: 'Registered Interest'
      });
    }
  }

  render() {
    return(
      <TouchableOpacity>
        <Card>
          <Image source={catImage} resizeMode="contain" />
          <Text>{this.props.title}</Text>
          <Text>{this.props.time}</Text>
          <Text>{this.props.description}</Text>
          <TouchableOpacity style={this.state.style}>
            <Text onPress={() => this.toggleRegistered()} style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>{this.state.text}</Text>
          </TouchableOpacity>
        </Card>
      </TouchableOpacity>
    );
  }
}

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.route.params.getData() }
  }

  updateData() {
    this.setState({
      data: this.props.route.params.getData()
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateData(), 1000); 
  }
  
  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddEvent')}>
            <Text style={styles.buttonText}>Create New Event</Text>
          </TouchableOpacity>
          <ScrollView style={{marginBottom: 72}}>
            {this.state.data.map((card) => (
              <Block title={card.title} time={card.time} description={card.description} buttonText={card.buttonText} key={card.id}/>
            ))}
            </ScrollView>
          </View>
          </>
    );
  }
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#2E86C1',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16,
    },
  });
export default Events;
