import React from "react";
import { Dimensions, View } from "react-native";
import { default as MyCarousel } from "react-native-snap-carousel";

import Item from "./Item";

import data from "../data/carousel";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

// idea and code taken from  https://www.waldo.com/blog/react-native-carousel, declared in submission form.
class Carousel extends React.Component {
    getItems() {
        const items = [];
        Object.entries(data).map(([title, values]) => {
            items.push(Object.assign(values, {"title": title}))
        });
        return items;
    }

    render() {
        return(
            <View>
                <MyCarousel
                    data = {this.getItems()}
                    itemWidth = {ITEM_WIDTH}
                    layout = "default"
                    layoutCardOffset = {8}
                    renderItem = {(item) => <Item data={item} />}
                    sliderWidth = {SLIDER_WIDTH}
                />
            </View>
        );
    }
}

export default Carousel;
