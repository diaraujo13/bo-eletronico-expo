import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { useCachedResources } from 'react-native-rapi-ui';
import {
	useFonts,
	RobotoCondensed_700Bold_Italic,
	RobotoCondensed_400Regular,
	RobotoCondensed_400Regular_Italic,
	RobotoCondensed_700Bold
} from '@expo-google-fonts/roboto-condensed';

export default function App (props) {
	const isLoadingComplete = useCachedResources();
	let [fontsLoaded] = useFonts({
		RobotoCondensed_700Bold_Italic,
		RobotoCondensed_400Regular,
		RobotoCondensed_400Regular_Italic,
		RobotoCondensed_700Bold
	});
	if (!isLoadingComplete &&  !props.skipLoadingScreen || !fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style='auto' translucent />
				<AppNavigator />
			</SafeAreaView>
		);
	}
}
