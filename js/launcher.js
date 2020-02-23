const storage = require('./js/storage');
const auth = require('./js/auth');
const {remote} = require('electron');

window.onload = function () {
    document.getElementById('profile').src = `https://crafatar.com/avatars/${storage.getLoginInfo().uuid}?overlay`;
    document.getElementById('getNickName').innerHTML = storage.getLoginInfo().username;
    //document.getElementById('logOut').onclick = function () {
    //    window.close();
    //};
    // document.getElementById('btnFullSize').onclick = function () {
    //     const window = remote.getCurrentWindow();
    //     window.isMaximized() ? window.unmaximize() : window.maximize();
    // };
    // document.getElementById('btnMiniSize').onclick = function () {
    //     const window = remote.getCurrentWindow();
    //     window.minimize();
    // };
    document.getElementById('btnLogout').onclick = function () {
        const info = storage.getLoginInfo();
        auth.invalidate(info.accessToken);
        storage.removeAllStorage();
        location.href = './login.html';
    };
};
