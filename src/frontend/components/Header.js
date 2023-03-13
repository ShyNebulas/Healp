import React from 'react';
import { Text } from 'react-native';

import styles from '../styles';

class Header extends React.Component {
    render() {
        return(
            <Text style={styles.header}>{this.props.name}</Text>
        );
    }
}

export default Header;