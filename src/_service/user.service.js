import {authHeader} from '../_helper';

const {
    REACT_APP_OAUTH_GITHUB_ORG: github_org,
    REACT_APP_API_HOST: api_host
} = process.env;

export const userService = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "User-Agent": "szm-apps"
        },
        body: JSON.stringify(user)
    };

    return fetch(`${api_host}/api/auth/sign-in`, requestOptions)
      .then(handleResponse)
      .then(res => {
          localStorage.setItem('token', res.accessToken);
          return res;
      });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${github_org}/users/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${github_org}/users`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${github_org}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.json().then(json => {
        const data = json;
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}