import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import events from  '../../data/events.json';


const AddEventForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    const newEvent = {
      title,
      description,
      time,
    };
    onSubmit(newEvent)

  };

  return (
    <View>
      <Text>Add a new event</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Add Event" onPress={handleSubmit} />
    </View>
  );
};

export default AddEventForm;

