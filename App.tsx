import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import Toast, { ToastConfig, ToastShowParams } from 'react-native-toast-message';

// Custom Toast Configuration
const toastConfig: ToastConfig = {
  success: ({ text1, text2, props }: ToastShowParams) => (
    <TouchableOpacity 
      onPress={props?.onPress} 
      activeOpacity={0.8} 
      style={{ width: '90%', alignSelf: 'center' }}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text style={{ color: '#0c006d', fontSize: 16, fontWeight: 'bold' }}>
          {text1}
        </Text>
        <Text style={{ color: '#0c006d', fontSize: 14 }}>{text2}</Text>
      </View>
    </TouchableOpacity>
  ),
};

// Main App Component
const App: React.FC = () => (
  <CartProvider>
    <NavigationContainer>
      <Navbar />
      <Toast config={toastConfig} />
    </NavigationContainer>
  </CartProvider>
);

export default App;
