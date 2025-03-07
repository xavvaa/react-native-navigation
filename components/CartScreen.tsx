import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../CartContext';
import { styles } from '../styles';

// Navigation Types
type RootStackParamList = {
  Home: undefined;
  Checkout: undefined;
};

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Checkout'>;

const CartScreen: React.FC = () => {
  const { cart, updateQuantity } = useCart();
  const navigation = useNavigation<CartScreenNavigationProp>();

  // Handle Quantity Decrease
  const handleDecreaseQuantity = (id: string) => {
    const item = cart.find((product) => product.id === id);
    if (item && (item.quantity ?? 1) === 1) {
      Alert.alert("Remove Item", "Are you sure you want to remove this item?", [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => updateQuantity(id, -1) },
      ]);
    } else {
      updateQuantity(id, -1);
    }
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);

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

                {/* Price and Quantity Row */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <Text style={styles.productPrice}>₱{(item.price * (item.quantity ?? 1)).toFixed(2)}</Text>
                  <Text style={styles.productPrice}>Qty: {item.quantity ?? 1}</Text>
                </View>

                {/* Quantity Controls */}
                <View style={styles.quantityContainer}>
                  <TouchableOpacity 
                    style={styles.cartButton} 
                    onPress={() => handleDecreaseQuantity(item.id)}
                  >
                    <Text style={styles.cartButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity ?? 1}</Text>
                  <TouchableOpacity 
                    style={styles.cartButton} 
                    onPress={() => updateQuantity(item.id, 1)}
                  >
                    <Text style={styles.cartButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          {/* Total Price and Checkout Button */}
          <Text style={styles.productPrice}>Total: ₱{totalPrice.toFixed(2)}</Text>
          <TouchableOpacity 
            style={styles.emptyCartButton} 
            onPress={() => navigation.navigate('Checkout')}
          >
            <Text style={styles.emptyCartButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CartScreen;
