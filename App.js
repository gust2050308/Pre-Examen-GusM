import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack'; // Asegúrate de usar importación por defecto

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

