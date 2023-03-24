import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import Carousel from "../components/Carousel";

import styles from "../styles";

class Home extends React.Component {
    render() {
        return(
            <View>
                <StatusBar style="auto"/>
                <SafeAreaView style={styles.homeContainer}>
                    <Carousel />
                </SafeAreaView>
                <Text>Interested Events:</Text>
            </View>
        );
    }
}

export default Home;