import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; // Asegúrate de importar correctamente
import DetailsScreen from './DetailsScreen'; // Asegúrate de importar correctamente

const Stack = createNativeStackNavigator();

export default function RootStack() { // Asegúrate de usar exportación por defecto
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}
