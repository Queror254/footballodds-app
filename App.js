//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Upcoming from './components/Upcoming';
import Today from './components/Today';
import Previous from './components/Previous';
import OddsScreen from './components/OddsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Today">
      <Tab.Screen name="Previous " component={Previous} />
      <Tab.Screen name="Today " component={Today} />
      <Tab.Screen name="Upcoming " component={Upcoming} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="DailyOdds" component={MyTabs} />
        <Drawer.Screen name="Previous" component={Previous} />
        <Drawer.Screen name="Today" component={Today} />
        <Drawer.Screen name="Upcoming" component={Upcoming} />
        <Drawer.Screen name="Odds" component={OddsScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/*
 <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
*/