import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const PaginationComponent = ({onNext, onPrevius, itemsCurrentPage}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

      {itemsCurrentPage !== 0 && (
        <TouchableOpacity
          style={{borderWidth: 1, padding: 15, borderColor: 'green'}}
          onPress={onPrevius}>
          <Text>BACK</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{borderWidth: 1, padding: 15, borderColor: 'green'}}
        onPress={onNext}>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PaginationComponent;
