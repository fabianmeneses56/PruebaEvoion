import React from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

const CartScreen = () => {

  const state = useSelector((state) => state.Cart);
  
  return (
    <>
      {state.map((movie) => (
        <Card>
          <CardTitle title={movie} />
          <CardContent text={'Genre: '} />
          <CardContent text={'price:'} />
          <CardAction separator={true} inColumn={false}>
            <CardButton onPress={() => {}} title="delete" color="blue" />
          </CardAction>
        </Card>
      ))}
    </>
  );
};

export default CartScreen;
