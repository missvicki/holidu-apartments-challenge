import { runSaga } from 'redux-saga';
import {receivesApartments} from './apartments'
import {GET_APARTMENTS_SUCCESS, GET_APARTMENTS_FAILURE} from '../types'

describe('Get apartments saga', () => {
  it('should handle fetching apartments in case of success', async () => {
    const dispatchedActions = [];

    const mockStore = {
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(mockStore, receivesApartments, {}).done;
    expect(dispatchedActions).toEqual([]);
  });

  it('should not fetch apartments', async () => {
    const dispatchedActions = [];

    const payload = {
      response: {
        data: ['error message'],
      },
    };

    const mockStore = {
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(mockStore, receivesApartments, {}).done;
    expect(dispatchedActions).toEqual([]);
  });
});
