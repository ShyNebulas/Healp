import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

import img from "../assets/cat.jpg";

import styles from "../styles";

class Block extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        registered: false,
        style: styles.blockDefaultButton,
        text: "Interested?"
      }
    } 
  
    toggleRegistered() {
      this.setState({
          registered: !this.state.registered,
          style: this.state.registered ? styles.blockDefaultButton : styles.blockRegisteredButton,
          text: this.state.registered ? "Interested?" : "Registered Interest"
      });
    }
  
    render() {
      return(
        <TouchableOpacity style={styles.blockBody}>
          <Card>
            <Image resizeMode="contain" source={img} />
            <Text>{this.props.title}</Text>
            <Text>{this.props.data.time}</Text>
            <Text>{this.props.data.description}</Text>
            <TouchableOpacity style={this.state.style}>
              <Text onPress={() => this.toggleRegistered()} style={styles.blockButtonText}>{this.state.text}</Text>
            </TouchableOpacity>
          </Card>
        </TouchableOpacity>
      );
    }
}

export default Block;