import React, { useState } from 'react';
import { View, Text, TextInput, Button ,Alert} from 'react-native';
import catImage from '../assets/cat.jpg';
import { Card } from 'react-native-elements';
import eventsData from  '../../data/events.json';
//import * as RNFS from 'react-native-fs';
import * as FileSystem from 'expo-file-system';



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
    //const path = RNFS.DocumentDirectoryPath + '/data/events.json';

    const { StorageAccessFramework } = FileSystem;

    const saveFile = async () => {
      const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
      // Check if permission granted
      if (permissions.granted) {
        // Get the directory uri that was approved
        let directoryUri = permissions.directoryUri;
        let data = jsonString;
        // Create file and pass it's SAF URI
        await StorageAccessFramework.createFileAsync(directoryUri, "events.json", "application/json").then(async(fileUri) => {
          // Save data to newly created file
          await FileSystem.writeAsStringAsync(fileUri, data, { encoding: FileSystem.EncodingType.UTF8 });
        })
        .catch((e) => {
          console.log(e);
        });
      } else {
        alert("You must allow permission to save.")
      }
    }
/*
    RNFS.writeFile(path, jsonString, 'utf8')
      .then(() => {
        Alert.alert('Success!', 'A new event has been created successfully!', [{ text: 'Okay' }]);
      })
      .catch((err) => {
        Alert.alert('Error', 'Error creating event, please try again.', [{ text: 'Okay' }]);
      });
*/
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

