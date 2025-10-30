import { StatusBar } from 'expo-status-bar';

import './global.css';
import { View, Text } from 'react-native';
import { nowPlayingAction } from 'core/actions/movies/now-playing.actions';


export default function App() {


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
