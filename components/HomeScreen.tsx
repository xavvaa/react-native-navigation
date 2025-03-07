import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../CartContext';
import { products } from '../products';
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { addToCart } = useCart();

  // Handle adding item to cart with toast notification
  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product);
    Toast.show({
      type: 'success',
      text1: 'Added to Cart!',
      text2: `Item was added. Tap to view cart`,
      position: 'top',
      visibilityTime: 2000,
      topOffset: 90,
      props: {
        onPress: () => navigation.navigate('Cart'),
      },
    });
  };

  // Render each product card
  const renderProduct = ({ item }: { item: (typeof products)[0] }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₱{item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => handleAddToCart(item)}>
          <Icon name="add-shopping-cart" size={18} color="#fff" />
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
