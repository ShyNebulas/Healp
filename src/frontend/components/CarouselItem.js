import React from 'react';
import {Linking,TouchableOpacity, View, Text, StyleSheet, Dimensions, Image, SafeAreaView} from "react-native";
import Carousel from "./Carousel";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


function onPressSlide(){
    let url = item.link
    Linking.openURL(url);
    // window.location.href = "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/";
}




const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
          <TouchableOpacity onPress={function(){Linking.openURL(item.link)}}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        elevation: 7,
    },
    image: {

        width: ITEM_WIDTH,
        height: 400,
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
    }
})

export default CarouselCardItem;



