import { StatusBar } from "expo-status-bar";
import React from "react";
import { SectionList, View } from "react-native";

import Entity from "../components/Entity";
import Header from "../components/Header";

import data from "../data/data.json";

import styles from "../styles";

class Chats extends React.Component {
    getSections() {
        const sections = [];
        Object.entries(data).forEach(([section, entities]) => {
            let names = [];
            Object.values(entities).forEach((entity) => {
                names.push(entity.name);
            });
            sections.push({
                title: section,
                data: names
            });
        });
        return sections;
    }

    render() {
        return (    
            <View style={styles.chatsView}>
                <StatusBar style="auto" />
                <SectionList
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => (
                        <Entity name={item} navigation={this.props.navigation} />
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <Header name={title} />
                    )}
                    sections={this.getSections()}
                />
            </View>
        );
    }
}

export default Chats;