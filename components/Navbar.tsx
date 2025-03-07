import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerStyle: styles.header,
        headerTintColor: styles.headerTitle.color,
        headerTitleStyle: styles.headerTitle,
        tabBarActiveTintColor: '#0c006d',
        tabBarInactiveTintColor: '#aaa6ff',
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
        }}
      />

      {/* Cart Tab */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="shopping-cart" size={24} color={color} />,
        }}
      />

      {/* Checkout Tab */}
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="payment" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
