import { Text, View } from 'react-native';
import React, {useRef} from 'react';
import CarouselComp from 'react-native-snap-carousel'
import CarouselItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselItem'
import data from "../../data/CarouselData";


const Carousel = () => {
    const isCarousel = useRef(null);

    return(
        <View>
            <CarouselComp
                layout = "default"
                layoutCardOffset = {8}
                ref = {isCarousel}
                data = {data}
                renderItem = {CarouselItem}
                sliderWidth = {SLIDER_WIDTH}
                itemWidth = {ITEM_WIDTH}
                />
        </View>
    )
}

export default Carousel;
