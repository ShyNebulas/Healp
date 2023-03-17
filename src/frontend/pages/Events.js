import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SectionList, View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AddEventForm from './src/frontend/pages/AddEvent';
import data from '../../data/events.json';
import catImage from "../assets/cat.jpg";

class Events extends React.Component {

  render({ navigation }) {
    return (
    <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEventForm')}>
              <Text style={styles.buttonText}>Create New Event</Text>
            </TouchableOpacity>
        {data.map((card) => (
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
      </View>
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
