import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from '../styles';

class Entity extends React.Component {
    render() {
        return(
            <Pressable onPress={() => this.props.navigation.navigate(this.props.name)}>
                <View style={styles.entityBody}>
                    <Text style={styles.entityTitle}>{this.props.name}</Text>
                </View>
            </Pressable>
        );
    }
}

export default Entity;