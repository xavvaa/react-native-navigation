import { StyleSheet, StatusBar, Dimensions } from 'react-native';

// Theme Colors
const { width } = Dimensions.get('window');
const cardMargin = 10;
const cardWidth = (width - 3 * cardMargin) / 2;

const primaryColor = '#FFCCEA';
const secondaryColor = '#CDC1FF';
const backgroundColor = '#FFF6E3';
const textColor = '#0c006d';
const lightTextColor = '#1A1A1A';
const buttonColor = '#FFCCEA';

export const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 10,
    paddingBottom: 30,
    backgroundColor,
    paddingHorizontal: cardMargin,
  },

  // Product Cards
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  card: {
    width: cardWidth,
    backgroundColor: secondaryColor,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 10,
  },

  productImage: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
  },

  productDetails: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },

  productName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: lightTextColor,
  },

  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: textColor,
    marginTop: 5,
  },

  // Cart and Checkout
  productItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 3,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-end',
  },

  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
    color: textColor,
  },

  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: buttonColor,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 5,
  },

  cartButtonText: {
    color: lightTextColor,
    fontSize: 14,
    fontWeight: '500',
  },

  // Navigation Bar
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: primaryColor,
    paddingVertical: 15,
    elevation: 5,
  },

  // Empty Cart
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },

  emptyCartText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: textColor,
  },

  emptyCartButton: {
    marginTop: 15,
    backgroundColor: buttonColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  emptyCartButtonText: {
    color: lightTextColor,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Headers
  header: {
    backgroundColor: primaryColor,
  },

  headerTitle: {
    color: lightTextColor,
    fontWeight: '700',
  },
});
