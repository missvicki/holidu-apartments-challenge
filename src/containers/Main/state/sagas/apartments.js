import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_APARTMENTS_REQUEST,
} from '../types';
import {getApartments, getApartmentsFailure} from '../actions/apartments';

export async function fetchApartments (){
    const response = await axios.get(
        'https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien'
    );
    return response.data;
}

export function* receivesApartments(action) {
    try {
        const response = yield call(fetchApartments);
        yield put(getApartments(response));
    } catch (error) {
        yield put(getApartmentsFailure(error));
    }
}

export function* getsApartmentsWatcher() {
    yield takeLatest(GET_APARTMENTS_REQUEST, receivesApartments);
}
