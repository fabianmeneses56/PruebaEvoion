import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CartEntry from '../components/CartEntry';

const CartScreen = () => {
  const cart = useSelector((state) => state.Cart);

  return (
    <>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <ScrollView>
          {cart.map((movie) => (
            <CartEntry key={movie.title} {...movie} />
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <Text>total Items: {cart.length}</Text>
        <Text>total Payment</Text>
      </View>
    </>
  );
};

export default CartScreen;
