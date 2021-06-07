import { handleResponse, handleError } from './apiUtils';

// [TODO]: Move to base url to env file
const baseUrl = 'http://localhost:3001/locations/';

export function getSearchLocations() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveLocation(location) {
  return fetch(baseUrl + (location.id || ''), {
    method: location.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(location),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteLocation(locationId) {
  return fetch(baseUrl + locationId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
