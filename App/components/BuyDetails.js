import React from 'react'
import { Text, View,TouchableOpacity,StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';

import {cleanItem, handleCheckout} from '../actions/cart';

const BuyDetails = () => {

    const dispatch = useDispatch();

    const {cartItems} = useSelector((state) => state.Cart);
    const itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0,
    );
    const total = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0,
    );
    const clean = () => {
        dispatch(cleanItem());
    };
  
    const check = () => {
        dispatch(handleCheckout());
    };

    return (
        <View style={{flex: 1}}>
          <View
            style={{margin: 10, borderWidth: 1, padding: 10, display: 'flex'}}>
            <Text style={styles.itemsText}>total Items: {itemCount}</Text>
            <Text style={styles.itemsText}>total Payment:{total}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity style={styles.Touchable} onPress={check}>
                <Text style={styles.TouchableText}>CHECKOUT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableClean} onPress={clean}>
                <Text style={styles.TouchableText}>CLEAN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
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

export default BuyDetails;
