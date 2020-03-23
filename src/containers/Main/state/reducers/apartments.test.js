import apartmentsReducer from './apartments';
import {
    GET_APARTMENTS_FAILURE,
    GET_APARTMENTS_SUCCESS,
    GET_APARTMENTS_REQUEST
} from '../types';

describe('apartments reducer', () => {
    const initialState = {
        loading: true,
        apartments: [],
        totalApartments: 0,
        error: null,
    };
    it('should define an undefined action that will return initial state', () => {
        expect(apartmentsReducer(initialState, { type: GET_APARTMENTS_REQUEST })).toEqual(initialState);
    });

    it("should prompt GET_APARTMENTS_SUCCESS action sets return apartments", () => {
        expect(
            apartmentsReducer(initialState,
                {
                    type: GET_APARTMENTS_SUCCESS,
                    payload: { offers: {}}
                }).payload
        ).toBe(undefined);
    });
    it("should prompt GET_RATE_START action sets loading to true", () => {
        expect(
            apartmentsReducer(initialState,
                {
                    type: GET_APARTMENTS_REQUEST
                }).loading
        ).toBe(true);
    });

});
