import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

import styles from '../styles';

const getBackgroundColor = (party) => party === 'sender' ? 'lightblue' : 'lightgray';
class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''}
  }

  handleText = (text) => {
    this.setState({input: text})
  }

  render() {
    return (
      <View>
        <StatusBar style="auto" />
        {this.props.messages.map((message) =>
          <View style={{margin: 8, backgroundColor: "#98FB98"}}>
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
          <Pressable style={styles.sharelocation}>
              <Text>Share Location</Text>
          </Pressable>
      </View>
    );
  }
}

export default DirectMessage;
