import React,{useEffect} from 'react'
import {Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMovies } from '../reducers/apiReducer';


const HomeScreen = () => {

     const dispatch = useDispatch();
    const {movieTickets} = useSelector( state => state.Api );

    useEffect(() => {
      dispatch(fetchGetMovies());
     },[dispatch])

    return (
        <>
            <Text>HomeScreen</Text>
            {movieTickets.map((post) => (
                <Text>{post.title}</Text>
            ))}
        </>
    )
}

export default HomeScreen;
