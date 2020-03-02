const mclogin = require("./js/auth");
const storage = require("./js/storage");
const { remote } = require("electron");

window.onload = function() {
  EnsureValidate();

  // document.getElementById('btnExit').onclick = function () {
  //     window.close();
  // };
  // document.getElementById('btnFullSize').onclick = function () {
  //     const window = remote.getCurrentWindow();
  //     window.isMaximized() ? window.unmaximize() : window.maximize();
  // };
  // document.getElementById('btnMiniSize').onclick = function () {
  //     const window = remote.getCurrentWindow();
  //     window.minimize();
  // };

  document.getElementById("passbox").onkeyup = function(event) {
    if (event.code === "Enter") {
      BtnLogin();
    }
  };

  document.getElementById("btnLogin").onclick = BtnLogin;

  function BtnLogin() {
    let errorSpan = document.getElementById("ErrorSpan");
    const id = document.getElementById("idbox").value;
    const passbox = document.getElementById("passbox");
    const password = passbox.value;
    if (!id || !password) {
      errorSpan.textContent = "Insert Mail And Password";
    } else {
      mclogin
        .login(id, password)
        .then(res => {
          const checked = document.getElementById("loginsave").checked;
          storage.setLoginInfo(
            res.data.accessToken,
            res.data.clientToken,
            res.data.selectedProfile.name,
            res.data.selectedProfile.id,
            password,
            checked
          );
          location.href = "./main.html";
        })
        .catch(error => {
          //if (error.response.status === 403) {
            let errorMsg = error.response.data.errorMessage;
            if (errorMsg === "Invalid credentials. Invalid username or password."){
              errorSpan.textContent = "Password or mail do not match"
            }
            else{
              errorSpan.textContent = errorMsg
              passbox.select()
            }
         // }
        });
    }
  }

  function EnsureValidate() {
    const localStorage = storage.tryGetLocalStorage();
    if (!localStorage) return;
    mclogin
      .validate(localStorage.accessToken)
      .then(res => {
        if (res.status === 204) {
          storage.clonLocaltoSession();
          location.href = "./main.html";
        }
      })
      .catch(err => {
        storage.removeLocalStorage();
      });
  }
};
