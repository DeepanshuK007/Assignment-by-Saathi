import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import Home from './Screens/Home';
import Detail from './Screens/Detail';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator sreenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
