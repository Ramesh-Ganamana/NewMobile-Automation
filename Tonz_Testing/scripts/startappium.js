const appium = require('appium');
const server = new appium.Server({
  // Specify Appium server options
  args: {
    address: '127.0.0.1',
    port: 4723, // Adjust port if needed
  },
});

server.start().then(() => {
  console.log('Appium server started successfully.');
}).catch((err) => {
  console.error(`Error starting Appium server: ${err.message}`);
});

 const output = execSync('echo "doing stuff"', {
        shell: '/bin/bash',
      })
      console.log('***** output:', output.toString())