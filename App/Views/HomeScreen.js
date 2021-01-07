import React, {useEffect} from 'react';
import {ScrollView,View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MoviesEntry from '../components/MoviesEntry';
import {fetchGetMovies} from '../reducers/apiReducer';

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
          <MoviesEntry key={movie.title}
          {...movie}/>
        ))}
      </ScrollView>
    </View>

  );
};

export default HomeScreen;
