import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import styles from "../styles";

const getBackgroundColor = (party) => party === "sender" ? styles.directMessageBackgroundSender : styles.directMessageBackgroundReceiver;
class DirectMessage extends React.Component {
  handleText = (text) => { 
    this.setState({input: text})
  }

  render() {
    return (
      <View>
        <StatusBar style="auto" />
        {this.props.messages.map((message) =>
          <View style={getBackgroundColor(message.party)}>
            <Text style={styles.directMessageText}>{message.text}</Text>
          </View>
        )}
        <SafeAreaView>
          <TextInput
            onChangeText={this.handleText}
            placeholder="Text Message"
            style={styles.directMessageInput}
          />
        </SafeAreaView>
        <Pressable style={styles.directMessageSubmit}>
          <Text>Submit</Text>
        </Pressable>
        <Pressable 
            onPress={() => {
              Alert.alert("Send Location", `http://maps.google.com/maps?z=12&t=m&q=loc:${this.props.location[0]}+${this.props.location[1]}`, [
                {text: "No Thanks"}, 
                {text: "Sure"}
              ]);
            }} 
            style={styles.directMessageShare}>
          <Text>Share Location</Text>
        </Pressable>
      </View>
    );
  }
}

export default DirectMessage;
