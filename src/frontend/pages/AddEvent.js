import React, { useState } from 'react';
import { View, Text, TextInput, Button ,Alert} from 'react-native';
import catImage from '../assets/cat.jpg';
import { Card } from 'react-native-elements';
import eventsData from  '../../data/events.json';


const AddEventForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleAddEvent = () => {
    const newEvent = {
      id: eventsData.length + 1,
      title: title,
      description: description,
      time: time,
      buttonText: 'Interested',
    };
    eventsData.push(newEvent);
    const jsonString = JSON.stringify(eventsData);
    fs.writeFile('data/events.json', jsonString, (err) => {
      if (err) {
        Alert.alert('Error', 'Error creating event, please try again.', [{ text: 'Okay' }]);
      } else {
        Alert.alert('Success!', 'A new event has been created successfully!', [{ text: 'Okay' }]);
      }
    });
    setTitle('');
    setDescription('');
    setTime('');
  };

  return (
    <View>
      <Text>Add a new event</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="E.g : 3PM - 5PM" value={time} onChangeText={setTime} />
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  );
};

export default AddEventForm;

