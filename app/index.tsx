import { Text, View, ActivityIndicator } from "react-native";
import React from 'react'
import { useMovies } from "presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "presentation/components/MainSlideshow";

const index = () => {

    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery } = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color="black" size={40} />
            </View>
        )
    }

    return (
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
            <Text className="text-xl font-bold px-4 mb-2">
                HomeScreen
            </Text>

            <MainSlideshow movies={nowPlayingQuery.data ?? []} />

            <Text className="text-xl font-bold text-blue-500">{JSON.stringify(nowPlayingQuery.data)}</Text>

        </View>
    )
}

export default index
