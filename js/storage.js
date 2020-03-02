function setLoginInfo(
  accessToken,
  clientToken,
  username,
  uuid,
  islocal = false
) {
  if (islocal) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("clientToken", clientToken);
    localStorage.setItem("username", username);
  }
  localStorage.setItem("uuid", uuid);
  sessionStorage.setItem("accessToken", accessToken);
  sessionStorage.setItem("clientToken", clientToken);
  sessionStorage.setItem("username", username);
}

function getLoginInfo() {
  return {
    uuid: localStorage.getItem("uuid"),
    accessToken: sessionStorage.getItem("accessToken"),
    clientToken: sessionStorage.getItem("clientToken"),
    username: sessionStorage.getItem("username"),
  };
}

function tryGetLocalStorage() {
  const accessToken = localStorage.getItem("accessToken");
  const clientToken = localStorage.getItem("clientToken");
  const username = localStorage.getItem("username");
  if (!accessToken && !clientToken && !username) {
    removeLocalStorage();
    return;
  }
  return {
    accessToken: accessToken,
    clientToken: clientToken,
    username: username,
  };
}

function removeAllStorage() {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("clientToken");
  sessionStorage.removeItem("username");
  removeLocalStorage();
}

function removeLocalStorage() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("clientToken");
  localStorage.removeItem("username");
  localStorage.removeItem("uuid");
}

function clonLocaltoSession() {
  const localStorage = tryGetLocalStorage();
  if (localStorage) {
    sessionStorage.setItem("accessToken", localStorage.accessToken);
    sessionStorage.setItem("clientToken", localStorage.clientToken);
    sessionStorage.setItem("username", localStorage.username);
  }
}

module.exports = {
  setLoginInfo,
  getLoginInfo,
  tryGetLocalStorage,
  clonLocaltoSession,
  removeLocalStorage,
  removeAllStorage
};
