import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import catImage from "../assets/cat.jpg";

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
              <TouchableOpacity key={card.id}>
                <Card>
                    <Image source={catImage} resizeMode="contain" />
                    <Text>{card.title}</Text>
                    <Text>{card.time}</Text>
                    <Text>{card.description}</Text>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>{card.buttonText}</Text>
                    </TouchableOpacity>
                  </Card>
                </TouchableOpacity>
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
