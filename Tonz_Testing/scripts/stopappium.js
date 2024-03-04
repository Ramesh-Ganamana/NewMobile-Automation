// scripts/stopAppium.js
const appium = require('appium');
const server = new appium.Server({
  // Specify Appium server options (similar to startAppium.js)
});

server.close().then(() => {
  console.log('Appium server stopped successfully.');
}).catch((err) => {
  console.error(`Error stopping Appium server: ${err.message}`);
});