import {
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_FAILURE,
    GET_APARTMENTS_REQUEST
  } from '../types';
  
  export const getApartments = (data) => ({
    type: GET_APARTMENTS_SUCCESS,
    payload: data.offers,
    totalApartments: data.offers.length
  });
  export const getApartmentsFailure = (data) => ({
    type: GET_APARTMENTS_FAILURE,
    payload: data,
  });
  export const getApartmentsRequest = () => ({
      type: GET_APARTMENTS_REQUEST
  })
  