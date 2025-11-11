import { View, Text } from 'react-native'
import { Slot, Stack } from 'expo-router';
import '../global.css';

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const _layout = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>

            <Slot />

        </QueryClientProvider>


    )
}

export default _layout