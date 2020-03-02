function setLoginInfo(
  accessToken,
  clientToken,
  username,
  uuid,
  password,
  islocal = false
) {
  if (islocal) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("clientToken", clientToken);
    localStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
  }
  localStorage.setItem("uuid", uuid);
  sessionStorage.setItem("accessToken", accessToken);
  sessionStorage.setItem("clientToken", clientToken);
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("password", password);
}

function getLoginInfo() {
  return {
    uuid: localStorage.getItem("uuid"),
    accessToken: sessionStorage.getItem("accessToken"),
    clientToken: sessionStorage.getItem("clientToken"),
    username: sessionStorage.getItem("username"),
    password: sessionStorage.getItem("password")
  };
}

function tryGetLocalStorage() {
  const accessToken = localStorage.getItem("accessToken");
  const clientToken = localStorage.getItem("clientToken");
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (!accessToken && !clientToken && !username) {
    removeLocalStorage();
    return;
  }
  return {
    accessToken: accessToken,
    clientToken: clientToken,
    username: username,
    password:password
  };
}

function removeAllStorage() {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("clientToken");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("password");
  removeLocalStorage();
}

function removeLocalStorage() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("clientToken");
  localStorage.removeItem("username");
  localStorage.removeItem("uuid");
  localStorage.removeItem("password");
}

function clonLocaltoSession() {
  const localStorage = tryGetLocalStorage();
  if (localStorage) {
    sessionStorage.setItem("accessToken", localStorage.accessToken);
    sessionStorage.setItem("clientToken", localStorage.clientToken);
    sessionStorage.setItem("username", localStorage.username);
    sessionStorage.setItem("password", localStorage.password);
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
