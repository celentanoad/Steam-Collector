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
    return fetch(BASE_URL, options).then(res => res.json());
  }

