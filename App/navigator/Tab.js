import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Routes from './TabRoutes';
import {useSelector} from 'react-redux';

const Tab = () => {
    const Tab = createBottomTabNavigator();
    const {cartItems} = useSelector((state) => state.Cart);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'HomeScreen') {
              return (
                <Icon
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'CartScreen') {
              return (
                <Icon
                  name={focused ? 'cart' : 'cart-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeScreen" component={Routes.HomeScreen} />
        <Tab.Screen name="CartScreen" component={Routes.CartScreen} options={{ tabBarBadge:cartItems.length }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tab;