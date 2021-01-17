import React, {createRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

import {addItemToCart,increaseMovie} from '../actions/cart';
import {useCounter} from '../hooks/useCounter';
import ActionSheetCom from './ActionSheet';

const actionSheetRef = createRef();
const MoviesEntry = ({title, price, genre, inventory, date, _id}) => {

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemToCart(title, price, genre, _id));
  };

  const increase = () =>{
  /*   dispatch(increase(_id)); */
  dispatch(increaseMovie(title))
  
/*   console.log('hola') */
  };

  const showActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const {cartItems} = useSelector( state => state.Cart );
 
  const isInCart = () => {
    return !!cartItems.find(item => item._id.$oid === _id.$oid);
}
  return (
    <>
      <Card>
        <CardTitle title={title} />
        <CardContent text={'id: ' + _id.$oid} />
        <CardContent text={'Genre: ' + genre} />
        <CardContent text={'Price:' + price} />
        <CardContent text={'inventory:' + inventory} />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={showActionSheet} title="see more" color="blue" />
          {!isInCart() && 
            <CardButton onPress={addItem} title="buy" color="blue" />
          }
          {
            isInCart() && 
            <CardButton onPress={increase} title="Add More" color="red" />
          }
        </CardAction>
      </Card>

      <ActionSheetCom actionSheet={actionSheetRef} />
    </>
  );
};

export default MoviesEntry;
