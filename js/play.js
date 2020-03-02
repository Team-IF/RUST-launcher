const { Client, Authenticator } = require('minecraft-launcher-core');


const lunchGame = async (accessToken, clientToken) => {

    console.log(accessToken + " " + clientToken)

    let opts = {
      clientPackage: null,
      authorization: Authenticator.refreshAuth(accessToken, clientToken),
      root: ".minecraft/",
      version: {
        number: "1.12.2",
        type: "release",
      },
      server:{
        host:"mc.hypixel.net"
      },
      memory: {
        max: "2000",
        min: "1000"
      }
    }

    const launcher = new Client();
    launcher.launch(opts);
    let log = document.getElementById("log");

    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => log.textContent = e.toString('utf-8'));
    launcher.on('error', (e) => console.log(e.toString('utf-8')));
};


module.exports = {
  lunchGame
};
