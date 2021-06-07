import * as types from './actionTypes';
import * as locationApi from '../../api/locationApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createLocationSuccess(location) {
  return { type: types.CREATE_LOCATION_SUCCESS, location };
}

export function loadLocationSuccess(locations) {
  return { type: types.LOAD_LOCATIONS_SUCCESS, locations };
}

export function deleteLocationOptimistic(location) {
  return { type: types.DELETE_LOCATION_OPTIMISTIC, location };
}

export function loadSearchLocations() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return locationApi
      .getSearchLocations()
      .then((locations) => {
        dispatch(loadLocationSuccess(locations));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveLocation(location) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return locationApi
      .saveLocation(location)
      .then((savedPlaces) => {
        dispatch(createLocationSuccess(savedPlaces));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteLocation(location) {
  return function (dispatch) {
    dispatch(deleteLocationOptimistic(location));
    return locationApi.deleteLocation(location.id);
  };
}
