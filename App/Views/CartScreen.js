import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartEntry from '../components/CartEntry';
import Icon from 'react-native-vector-icons/Ionicons';
import {cleanItem} from '../actions/cart';

const CartScreen = () => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const clean = () => {
    if (cart.length == 0) {
      alert('Your cart is empty');
    } else {
      alert('Congratulations Checkout successfull');
      dispatch(cleanItem());
    }
  };

  return (
    <>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        {cart.length > 0 ? (
          <ScrollView>
            {cart.map((movie) => (
              <CartEntry key={movie.title} {...movie} />
            ))}
          </ScrollView>
        ) : (
          <View style={{marginTop: 150}}>
            <Text style={{textAlign: 'center'}}>No items in your cart</Text>
            <Icon style={{textAlign: 'center'}} name="warning" size={150} />
          </View>
        )}
      </View>

      <View style={{flex: 1}}>
        <View style={{margin: 10, borderWidth: 1, padding: 10}}>
          <Text style={styles.itemsText}>total Items: {cart.length}</Text>
          <Text style={styles.itemsText}>total Payment:</Text>
          <TouchableOpacity style={styles.Touchable} onPress={clean}>
            <Text style={styles.TouchableText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Touchable: {
    marginTop: 10,
    backgroundColor: 'green',
    display: 'flex',
  },
  TouchableText: {
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  itemsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default CartScreen;
