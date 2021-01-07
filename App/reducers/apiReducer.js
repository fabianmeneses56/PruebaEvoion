import {apiGet} from '../Api/api';

const initialState = {
  movieTickets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIETICKETS':
      return {...state, movieTickets: action.payload};
    default:
      return {...state};
  }
};
