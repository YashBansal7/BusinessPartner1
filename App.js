import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen/HomeScreen';
import ProductionScreen from './ProductionScreen/ProductionScreen'
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
export default function App() {
  return (
    <View>
     
<AppContainer />

    </View>
  );
}


var AppNavigator = createSwitchNavigator({HomeScreen:HomeScreen , ProductionScreen:ProductionScreen})
const AppContainer = createAppContainer(AppNavigator)
