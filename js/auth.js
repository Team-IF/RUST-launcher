const axios = require('axios');
const comid = require('node-machine-id');
const clientToken = comid.machineIdSync(true);

/**
 * @return {boolean}
 */
function True(status) {
    return true
}

function login(id, password) {
    return axios.post('https://authserver.mojang.com/authenticate', {
        "agent": {
            "name": "Minecraft",
            "version": 1
        },
        "username": id,
        "password": password,
        "clientToken": clientToken,
        "requestUser": false
    });
}

function refresh(token) {
    return axios.post('https://authserver.mojang.com/refresh', {
        "accessToken": token,
        "clientToken": clientToken
    }, {
        validateStatus: True
    })
}

function validate(token) {
    return axios.post('https://authserver.mojang.com/validate', {
        "accessToken": token,
        "clientToken": clientToken
    })
}

function signout(id, password) {
    return axios.post('https://authserver.mojang.com/signout', {
        "username": id,
        "password": password
    }, {
        validateStatus: True
    })
}

function invalidate(token) {
    return axios.post('https://authserver.mojang.com/invalidate', {
        "accessToken": token,
        "clientToken": clientToken
    })
}

module.exports = {
    login,
    refresh,
    validate,
    signout,
    invalidate
};
