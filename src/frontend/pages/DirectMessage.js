import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

import styles from '../styles';

const getBackgroundColor = (party) => party === 'sender' ? 'lightgreen' : 'lightgray';
class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''}
  }

  createAlert() {
    Alert.alert('Send Location', `http://maps.google.com/maps?z=12&t=m&q=loc:${this.props.latitude}+${this.props.longitude}`, [
      {text: 'No Thanks'}, 
      {text: 'Sure'}
    ]);
  }

  handleText = (text) => {
    this.setState({input: text})
  }

  render() {
    return (
      <View>
        <StatusBar style="auto" />
        {this.props.messages.map((message) =>
          <View style={{margin: 8, backgroundColor: getBackgroundColor(message.party)}}>
            <Text style={{padding: 8}}>{message.text}</Text>
          </View>
        )}
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={this.handleText}
            placeholder="Text Message"
          />
        </SafeAreaView>
        <Pressable style={styles.submit}>
          <Text>Submit</Text>
        </Pressable>
        <Pressable onPress={() => {this.createAlert()}} style={styles.sharelocation}>
          <Text>Share Location</Text>
        </Pressable>
      </View>
    );
  }
}

export default DirectMessage;
