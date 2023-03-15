'use strict';

import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    entity: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32
    },
    title: { fontSize: 24 },
    input: {
        padding: 5,
        margin: 15,
        height: 40,
        borderColor: '#f9c2ff',
        borderWidth: 1
    },
    submit: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        margin: 8,
        height: 40,
    },
    sharelocation: {
        backgroundColor: '#ADD8E6',
        padding: 10,
        margin: 8,
        height: 40,
    }
});

module.exports = styles;



