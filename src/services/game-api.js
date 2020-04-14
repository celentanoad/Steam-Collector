import tokenService from './tokenService';

const BASE_URL = '/api/games/';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(game) {
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


export function getGame(id) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(`${BASE_URL}${id}`, options, {mode: "cors"})
  .then(res => res.json())
}

export function deleteGame(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(`${BASE_URL}${id}`, options, {mode: "cors"})
  .then(res => res.json())
}

export function update(game) {
  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(game)
  };
  return fetch(`${BASE_URL}${game._id}`, options, {mode: "cors"})
  .then(res => res.json())
}