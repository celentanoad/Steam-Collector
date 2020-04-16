import tokenService from './tokenService';

const BASE_URL = '/api/wishlist/';

export function add(game) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // Add this header - don't forget the space after Bearer
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(game)
    };
    return fetch(BASE_URL, options, {mode: "cors"}).then(res => res.json());
  }

  export function remove(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    };
    return fetch(`${BASE_URL}${id}`, options, {mode: "cors"})
    .then(res => res.json())
  }

  export function getList() {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    };
    return fetch(BASE_URL, options).then(res => res.json());
  }