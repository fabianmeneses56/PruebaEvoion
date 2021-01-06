import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Routes from './TabRoutes';


const Tab = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={Routes.HomeScreen} />
        <Tab.Screen name="CartScreen" component={Routes.CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tab;