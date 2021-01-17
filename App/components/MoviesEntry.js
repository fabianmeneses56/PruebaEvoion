import React, {createRef} from 'react';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';
import ActionSheet from 'react-native-actions-sheet';

import {addItemToCart} from '../actions/cart';
import { useCounter } from '../hooks/useCounter';


const actionSheetRef = createRef();
const MoviesEntry = ({title, price, genre, inventory, date,_id}) => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addItemToCart(title, price, genre,_id,counter));
  };

  const showActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const { counter, increment, decrement, reset } = useCounter(1);
  return (
    <>
      <Card>
        <CardTitle title={title} />
        <CardContent text={'id: '+_id.$oid} />
        <CardContent text={'Genre: ' + genre} />
        <CardContent text={'Price:' + price} />
        <CardContent text={'inventory:' + inventory} />
        <CardContent>
          <View style={{display:"flex",flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            {counter>1&&<TouchableOpacity style={{borderWidth:1,padding:10}} onPress={decrement}>
              <Text style={{fontSize:30}}>-</Text>
            </TouchableOpacity>}
            <Text>{counter}</Text>
            {counter<inventory&&
            <TouchableOpacity style={{borderWidth:1,padding:10}} onPress={increment}>
              <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>}
          </View>
        </CardContent>
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
          <Text>{'Genre: ' + genre} </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            finibus lobortis nibh, ultrices elementum purus porta et. Donec
            maximus imperdiet libero, volutpat gravida justo mollis nec. Mauris
            imperdiet blandit accumsan. Sed pellentesque blandit felis, quis
            facilisis sem suscipit id. Curabitur vulputate neque enim
          </Text>
      </ActionSheet>
    </>
  );
};

export default MoviesEntry;
