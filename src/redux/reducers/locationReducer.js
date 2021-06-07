import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.locations, action) {
  switch (action.type) {
    case types.CREATE_LOCATION_SUCCESS:
      return [...state, { ...action.location }];
    case types.LOAD_LOCATIONS_SUCCESS:
      return action.locations;
    case types.DELETE_LOCATION_OPTIMISTIC:
      return state.filter((location) => location.id !== action.location.id);
    default:
      return state;
  }
}
