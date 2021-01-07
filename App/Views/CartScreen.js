import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

const CartScreen = () => {
  const cart = useSelector((state) => state.Cart);
  console.log(cart);

  return (
    <>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <ScrollView>
          {cart.map((movie) => (
            <Card>
              <CardTitle title={movie.title} />
               <CardContent text={movie.price} />
              <CardAction separator={true} inColumn={false}>
                <CardButton onPress={() => {}} title="delete" color="blue" />
              </CardAction>
            </Card>
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
