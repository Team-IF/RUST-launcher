const storage = require("./js/storage");
const auth = require("./js/auth");
const { remote } = require("electron");
const { lunchGame } = require("./js/play.js");
const comid = require("node-machine-id");
const clientToken = comid.machineIdSync(true);

window.onload = function() {
    console.log(storage.getLoginInfo().uuid)
  document.getElementById("profile").src = `https://crafatar.com/avatars/${
    storage.getLoginInfo().uuid
  }?overlay`;
  document.getElementById(
    "getNickName"
  ).innerHTML = storage.getLoginInfo().username;
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
  document.getElementById("btnLogout").onclick = function() {
    const info = storage.getLoginInfo();
    auth.invalidate(info.accessToken);
    storage.removeAllStorage();
    location.href = "./login.html";
  };

  this.document.getElementById("playGame").onclick = function() {
    const accessToken = storage.getLoginInfo().accessToken;

    lunchGame(accessToken, clientToken);
  };
};
