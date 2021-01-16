import React, {useEffect} from 'react';
import {ScrollView,View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import { fetchGetMovies } from '../actions/apiActions';
import MoviesEntry from '../components/MoviesEntry';


const HomeScreen = () => {

  const dispatch = useDispatch();
  const {movieTickets} = useSelector((state) => state.Api);
  
  useEffect(() => {
    dispatch(fetchGetMovies());
  }, [dispatch]);

  return (

    <View>
      <ScrollView>
        {movieTickets.map((movie) => (
          <MoviesEntry key={movie._id.$oid}
          {...movie}/>
        ))}
      </ScrollView>
    </View>

  );
};

export default HomeScreen;
