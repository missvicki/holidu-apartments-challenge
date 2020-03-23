import {
    GET_APARTMENTS_FAILURE,
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_REQUEST
} from '../types';
  
const intialState = {
    loading: false,
    apartments: [],
    totalApartments: 0,
    error: null,
};
  
const apartmentsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_APARTMENTS_REQUEST:
      return { ...state, loading: true };
    case GET_APARTMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_APARTMENTS_SUCCESS:
      return { ...state, loading: false, apartments: action.payload, totalApartments: action.totalApartments};
    default:
      return { ...state };
  }
};

export default apartmentsReducer;
  