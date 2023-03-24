import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Block from "../components/Block";

import styles from "../styles";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.route.params.getData() }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateData(), 1000); 
  }

  updateData() {
    this.setState({ data: this.props.route.params.getData() });
  }

  render() {
    return (
      <>
        <StatusBar style="auto" />
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AddEvent")} style={styles.eventsButton}>
            <Text style={styles.eventsButtonText}>Create New Event</Text>
          </TouchableOpacity>
          <ScrollView style={styles.eventScrollContainer}>
            {Object.entries(this.state.data).map(([title, values], key) => (
              <Block data={values} key={key} title={title} />
            ))}
          </ScrollView>
          </View>
        </>
      );
    }
  }

export default Events;

