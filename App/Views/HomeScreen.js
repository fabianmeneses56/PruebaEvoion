import React, {useEffect} from 'react';
import {ScrollView,View, Text,TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import { fetchGetMovies } from '../actions/apiActions';
import MoviesEntry from '../components/MoviesEntry';
import PaginationComponent from '../components/PaginationComponent';


const HomeScreen = () => {

  const dispatch = useDispatch();
  const {movieTickets,show,currentPage} = useSelector((state) => state.Api);

  useEffect(() => {
    dispatch(fetchGetMovies(currentPage));
  }, [dispatch]);

  const handleNext=()=>{
    dispatch(fetchGetMovies(currentPage + 1));
  }
  const handlePrevius=()=>{
    dispatch(fetchGetMovies(currentPage - 1));
  }
  
  return (

    <View>
      {
        (show)
        ?<Text style={{fontSize:25}}>cargando</Text>
        :<ScrollView>
        {movieTickets.map((movie) => (
          <MoviesEntry key={movie._id.$oid}
          movie={movie}/>
        ))}
        <PaginationComponent 
        onNext={handleNext}
        onPrevius={handlePrevius}
        itemsCurrentPage={currentPage}
        />
      </ScrollView> 
      }
           
    </View>
    

  );
};

export default HomeScreen;
