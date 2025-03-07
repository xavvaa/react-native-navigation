import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCart } from '../CartContext';
import { styles } from '../styles';

// Navigation Types
type RootStackParamList = {
  Home: undefined;
};

type CheckoutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const CheckoutScreen: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigation = useNavigation<CheckoutScreenNavigationProp>();

  // Calculate total price and total items dynamically
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0);

  // Handle checkout confirmation
  const handleCheckout = () => {
    Alert.alert(
      'Confirm Purchase',
      `You are purchasing ${totalItems} item(s) for a total of ₱${totalPrice.toFixed(2)}. Proceed?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Yes', 
          onPress: () => {
            Alert.alert(
              'Checkout Successful',
              'Your order has been placed successfully!',
              [{ 
                text: 'OK', 
                onPress: () => {
                  clearCart();
                  navigation.navigate('Home');
                } 
              }]
            );
          } 
        } 
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Empty Cart View */}
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
          <TouchableOpacity 
            style={styles.emptyCartButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.emptyCartButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* Cart Items List */}
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Text style={styles.productName}>{item.name}</Text>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <Text style={styles.productPrice}>₱{(item.price * (item.quantity ?? 1)).toFixed(2)}</Text>
                  <Text style={styles.productPrice}>Qty: {item.quantity ?? 1}</Text>
                </View>
              </View>
            )}
          />

          {/* Total Price and Checkout Button */}
          <Text style={[styles.productPrice, { textAlign: 'center', marginTop: 10 }]}>
            Total: ₱{totalPrice.toFixed(2)}
          </Text>

          <TouchableOpacity style={styles.emptyCartButton} onPress={handleCheckout}>
            <Text style={styles.emptyCartButtonText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CheckoutScreen;
