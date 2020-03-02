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
      memory: {
        max: "2000",
        min: "1000"
      }
    }

    const launcher = new Client();
    launcher.launch(opts);

    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => console.log(e.toString('utf-8')));
    launcher.on('error', (e) => console.log(e.toString('utf-8')));
};


module.exports = {
  lunchGame
};
