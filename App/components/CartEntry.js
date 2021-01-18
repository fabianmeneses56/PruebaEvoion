import React from 'react';
import { useDispatch } from "react-redux";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';
import { removeItem } from '../actions/cart';


const CartEntry = ({movie,quantity}) => {
console.log(movie)
    const dispatch = useDispatch();

   const remove=()=>{
    dispatch(removeItem(movie._id.$oid,movie.price))
  }

  return (
    <Card>
    <CardTitle title={'Movie: '+movie.title} />
     <CardContent text={'Price: '+movie.price} />
     <CardContent text={'ID: '+movie._id.$oid} />
     <CardContent text={'quantity: '+movie.quantity} />
    <CardAction separator={true} inColumn={false}>
      <CardButton onPress={remove} title="delete" color="blue" />
    </CardAction>
  </Card>
  );
};

export default CartEntry;
