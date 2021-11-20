import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const AppStack = createNativeStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} options={{
        headerTitle: "Pokedex"
      }} />
      <AppStack.Screen name="Details" component={Details} options={{
        headerTitle: "Detalhes"
      }} />
    </AppStack.Navigator>
  );
}