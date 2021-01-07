import React, {createRef} from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';
import ActionSheet from 'react-native-actions-sheet';

import {addItemToCart} from '../actions/cart';


const actionSheetRef = createRef();
const MoviesEntry = ({title, price, genre,inventory,date}) => {

  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addItemToCart(title, price, genre));
  };

  const showActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };
  return (
    <>
      <Card>
        <CardTitle title={title} />
        <CardContent text={'Genre: ' + genre} />
        <CardContent text={'Price:' + price} />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={showActionSheet} title="see more" color="blue" />
          <CardButton onPress={addItem} title="buy" color="blue" />
        </CardAction>
      </Card>

      <ActionSheet
        ref={actionSheetRef}
        bounceOnOpen={true}
        bounciness={8}
        gestureEnabled={true}>
          <Text>{inventory}</Text>
      </ActionSheet>
    </>
  );
};

export default MoviesEntry;
