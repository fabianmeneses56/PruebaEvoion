import React from 'react';
import { useDispatch,useSelector} from "react-redux";
import {ScrollView, View} from 'react-native'
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';
import { addItemToCart } from '../actions/cart';

const MoviesEntry = ({_id,title,price,genre}) => {

    const dispatch = useDispatch();
   /*  const state = useSelector((state) => state.Cart);
   console.log(state) */

    const addItem = () => {
     
     dispatch(addItemToCart(title))
      };

  return (
      <Card>
        <CardTitle title={title} />
        <CardContent text={"Genre: "+genre} />
        <CardContent text={"price:"+price} />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {}} title="see more" color="blue" />
          <CardButton onPress={addItem} title="buy" color="blue" />
        </CardAction>
      </Card>
  );
};

export default MoviesEntry;
