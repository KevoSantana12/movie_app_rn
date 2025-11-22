import { View, Text } from 'react-native'
import { Slot, Stack } from 'expo-router';
import '../global.css';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const _layout = () => {

    const queryClient = new QueryClient()

    return (

        <GestureHandlerRootView>
            <QueryClientProvider client={queryClient}>

                <Slot />

            </QueryClientProvider>
        </GestureHandlerRootView>


    )
}

export default _layout