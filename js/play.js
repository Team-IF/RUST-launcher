const { Client, Authenticator } = require("minecraft-launcher-core");
const launcher = new Client();

let accessToken, clientToken


const lunchGame = (accessToken, clientToken) => {

    let opts = {
    clientPackage: null,
    // For production launchers, I recommend not passing
    // the getAuth function through the authorization field and instead
    // handling authentication outside before you initialize
    // MCLC so you can handle auth based errors and validation!
    authorization: Authenticator.validate(accessToken, clientToken),
    root: "./minecraft",
    version: {
      number: "1.12.2",
      type: "release"
    },
    memory: {
      max: "6000",
      min: "4000"
    }
  };

  
  launcher.launch(opts);

  launcher.on("debug", e => console.log(e));
  launcher.on("data", e => console.log(e));
};

module.exports = {
  lunchGame
};
