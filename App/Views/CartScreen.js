import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native'

import CartEntry from '../components/CartEntry';
import {cleanItem,handleCheckout} from '../actions/cart';

const CartScreen = () => {
  const {cartItems} = useSelector((state) => state.Cart);
  const {sumItems} = useSelector((state) => state.Cart);
  const {checkout} = useSelector((state) => state.Cart);

  const navigation = useNavigation()

  const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
 
  const total=cartItems.reduce((accumulator, currentValue)=>accumulator + currentValue.price*currentValue.quantity,0)


  const dispatch = useDispatch();
  const clean = () => {
    if (cartItems.length == 0) {
      alert('Your cart is empty');
    } else {
      dispatch(cleanItem());
    }
  };

  const check = () => {
    if (cartItems.length == 0) {
      alert('Your cart is empty');
    } else {
      return dispatch(handleCheckout());
    }
  };

  return (
    <>
      <View style={{flex: 2, backgroundColor: 'grey'}}>
        {cartItems.length > 0 ? (
          <ScrollView>
            {cartItems.map((movie) => (
              <CartEntry key={movie._id.$oid} movie={movie} />
            ))}
          </ScrollView>
        ) : (
          <View style={{marginTop: 150}}>
            <Text style={{textAlign: 'center'}}>No items in your cart</Text>
            <Icon style={{textAlign: 'center'}} name="warning" size={150} />
          </View>
        )}
      </View>
      
          {
            checkout &&
            <View>
              <Text style={{textAlign: 'center',color:'green'}}>Checkout successfull</Text>
              <Icon style={{textAlign: 'center'}} name="checkmark-done" color="green" size={150} />
              <TouchableOpacity style={styles.Touchable} onPress={()=>navigation.navigate('HomeScreen')}>
                <Text style={styles.TouchableText}>BUY MORE</Text>
              </TouchableOpacity>
          </View>
          }
     {cartItems.length > 0 && 
     <View style={{flex: 1}}>
        <View style={{margin: 10, borderWidth: 1, padding: 10,display:'flex'}}>
          <Text style={styles.itemsText}>total Items: {itemCount}</Text>
          <Text style={styles.itemsText}>total Payment:{total}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.Touchable} onPress={check}>
              <Text style={styles.TouchableText}>CHECKOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableClean} onPress={clean}>
              <Text style={styles.TouchableText}>CLEAN</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>}
    </>
  );
};

const styles = StyleSheet.create({
  Touchable: {
    marginTop: 10,
    backgroundColor: 'green',
   
  },
  TouchableClean: {
    marginTop: 10,
    backgroundColor: 'black',
   
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
