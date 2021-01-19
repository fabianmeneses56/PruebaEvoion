import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import CartEntry from '../components/CartEntry';
import CheckoutComponent from '../components/CheckoutComponent';
import BuyDetails from '../components/BuyDetails';

const CartScreen = () => {

  const dispatch = useDispatch();
  const {cartItems, sumItems, checkout} = useSelector((state) => state.Cart);

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
     
      {checkout && (
        <CheckoutComponent/>
      )}
     
      {cartItems.length > 0 && (
        <BuyDetails/>
      )}
    </>
  );
};

export default CartScreen;
