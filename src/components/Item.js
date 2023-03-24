import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

import styles from "../styles";

// idea and code taken from  https://www.waldo.com/blog/react-native-carousel, declared in submission form.
class Item extends React.Component { 
    render() {
        return(
            <View style={styles.itemContainer} key={this.props.data.index}>
                <TouchableOpacity onPress={() => Linking.openURL(this.props.data.item.url)}>
                    <Image
                        source={{uri: this.props.data.item.image}}
                        style={styles.itemImage}
                    />
                    <Text style={styles.itemHeader}>{this.props.data.item.title}</Text>
                    <Text style={styles.itemBody}>{this.props.data.item.description}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Item;