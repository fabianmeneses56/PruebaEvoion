import React from 'react';
import {ScrollView, View} from 'react-native'
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

const MoviesEntry = ({title,price,genre}) => {
  return (
      <Card>
        <CardTitle title={title} />
        <CardContent text={"Genre: "+genre} />
        <CardContent text={"price:"+price} />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {}} title="see more" color="blue" />
          <CardButton onPress={() => {}} title="buy" color="blue" />
        </CardAction>
      </Card>
  );
};

export default MoviesEntry;
