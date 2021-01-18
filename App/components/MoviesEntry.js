import React, {createRef,useState} from 'react';
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
const MoviesEntry = ({movie}) => {

  const [counter, setcounter] = useState(1)

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemToCart(movie));
  };

  const increase = () =>{
    setcounter(counter+1)
  dispatch(increaseMovie(movie))
  };

  const showActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const {cartItems} = useSelector( state => state.Cart );

  const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);

  const isInCart = () => {
    return !!cartItems.find(item => item._id.$oid === movie._id.$oid);
}

  return (
    <>
      <Card>
        <CardTitle title={movie.title} />
        <CardContent text={'id: ' + movie._id.$oid} />
        <CardContent text={'Genre: ' + movie.genre} />
        <CardContent text={'Price:' + movie.price} />
        <CardContent text={'inventory:' + movie.inventory} />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={showActionSheet} title="see more" color="blue" />
          {!isInCart() && 
            <CardButton onPress={addItem} title="buy" color="blue" />
          }
          {
            isInCart() && counter<movie.inventory &&
            <CardButton onPress={increase} title="Add More" color="red" />
          }
          {
          counter>=movie.inventory &&
           <Text>only {movie.inventory} tickets for this movie</Text>
          }
        </CardAction>
      </Card>

      <ActionSheetCom actionSheet={actionSheetRef} />
    </>
  );
};

export default MoviesEntry;
