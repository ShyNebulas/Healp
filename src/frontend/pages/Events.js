import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SectionList, View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

import data from '../../data/events.json';
import catImage from "../assets/cat.jpg";

class Events extends React.Component {
  render() {
    return (
      <View>
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
