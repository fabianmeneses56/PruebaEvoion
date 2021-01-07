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


const CartEntry = ({_id,title,price,genre}) => {

    const dispatch = useDispatch();

   const remove=()=>{
    dispatch(removeItem(title))
  }

  return (
    <Card>
    <CardTitle title={title} />
     <CardContent text={price} />
    <CardAction separator={true} inColumn={false}>
      <CardButton onPress={remove} title="delete" color="blue" />
    </CardAction>
  </Card>
  );
};

export default CartEntry;
