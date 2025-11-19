import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

interface Props {
    poster?: string;
    originalTitle?: string;
    title?: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions();

    return (
        <>
            <View
                style={{ height: screenHeight * 0.7 }}
                className="shadow-xl shadow-black/20">
                <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image
                        source={{ uri: poster }}
                        resizeMode='cover'
                        className='flex-1'
                    />
                </View>
            </View>

            <View className='px-5 mt-5'>
                <Text className='font-normal'>{originalTitle}</Text>
                <Text className='font-semibold text-2xl'>{title}</Text>
            </View>

        </>
    )

}

export default MovieHeader