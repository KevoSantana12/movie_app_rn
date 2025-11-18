import { Text, View, ActivityIndicator } from "react-native";
import React from 'react'
import { useMovies } from "presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "presentation/components/MainSlideshow";
import MovieHorizontalList from "presentation/components/MovieHorizontalList";

const index = () => {

    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color="black" size={40} />
            </View>
        )
    }

    return (
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
            <MainSlideshow
                movies={nowPlayingQuery.data ?? []}

            />

            <MovieHorizontalList
                title="Populares"
                movies={popularQuery.data ?? []}
                className="mb-5"
            />

            <MovieHorizontalList
                title="Mejores calificadas"
                movies={topRatedQuery.data?.pages.flat() ?? []}
                className="mb-5"
                loadNextPage={topRatedQuery.fetchNextPage}
            />

            <MovieHorizontalList
                title="Proximos estrenos"
                movies={upcomingQuery.data ?? []}
                className="mb-5"
            />


        </View>
    )
}

export default index
