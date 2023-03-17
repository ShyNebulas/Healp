import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SectionList, View } from 'react-native';

import Entity from '../components/Entity';
import Header from '../components/Header';

import data from '../../data/data.json';

import styles from '../styles';

class Chats extends React.Component {
    render() {
        // Converts JSON data to array of objects
        const dataArray = [];
        Object.entries(data).forEach(([section, entities]) => {
            let names = [];
            Object.values(entities).forEach((entity) => {
                names.push(entity.name);
            });
            dataArray.push({
                title: section,
                data: names
            });
        });
        return (    
            <View style={styles.view}>
                <StatusBar style="auto" />
                <SectionList
                    sections={dataArray}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => (
                        <Entity name={item} navigation={this.props.navigation} />
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <Header name={title} />
                    )}
                />
            </View>
        );
    }
}

export default Chats;

/*
    - References: https://reactnative.dev/docs/sectionlist
*/