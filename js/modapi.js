const axios = require('axios');

const BASE_URL = 'https://api.mysticrs.tk';

/**
 * @description 모드팩 목록을 가져오는 함수
 * @returns {Promise<Array<Object>>}
 */
function getList() {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/list`)
            .then((data) => {
                resolve(data.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * @description 모드팩 이름으로 업데이트를 가져오는 함수
 * @param {string} modPackName 모드팩이름
 * @returns {Promise<string>}
 */
// 현재는 HTML 전체를 긁어옵니다.
function getUpdate(modPackName) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/update?name=${modPackName}`)
            .then((data) => {
                resolve(data.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * 모드팩이름으로 모드팩을 가져오는 함수
 * @param {string} modPackName 모드팩이름
 * @returns {Promise<Array<Object>>}
 */
function getModPack(modPackName) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/modpack?name=${modPackName}`)
            .then((data) => {
                resolve(data.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

module.exports = {
    getList,
    getUpdate,
    getModPack
};