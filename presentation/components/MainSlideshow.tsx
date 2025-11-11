import { View, Text } from 'react-native'
import React from 'react'
import { Movie } from 'infrastructure/interfaces/movie.interface'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';


interface Props {
    movies: Movie[],
}

const MainSlideshow = ({ movies }: Props) => {
    return (
        <View className='h-[250px] w-full'>
            <Carrousel />


        </View>
    )
}

export default MainSlideshow