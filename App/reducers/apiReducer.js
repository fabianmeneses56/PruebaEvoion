/* import {apiGet} from '../Api/api'; */

const initialState = {
  movieTickets: [],
  show:false,
  currentPage:0,
  lastPage:0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_RESPONSE':
      return {...state, movieTickets: action.payload,show:false};
    case 'FETCH_MOVIE_REQUEST':
      return {...state,show:true};
    case 'SET_ITEMS_CURRENT_PAGE':
      return{...state,currentPage:action.payload}
    default:
      return {...state};
  }
};
