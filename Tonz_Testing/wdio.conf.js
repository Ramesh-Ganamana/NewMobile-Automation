const path =require('path');

 exports.config = {
    // ... other configurations ...
    waitforTimeout: 60000,
     services: ['appium'],
     appium: {
       command: 'appium',
       commandTimeout: 30000,
       args: {
         address: 'local host',
         port: 4723,
       },
   logpath:'./'
     },
    specs: ["./test/specs/**/*.js"],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // Capabilities  // 
    
    // maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appiun:appPackage': 'com.famas.tonz',
        'appium:appActivity': 'com.famas.tonz.core.MainActivity',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app':path.join(process.cwd(),'./app/android/app-debug.apk')
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:4723/wd/hub',
    connectionRetryTimeout: 220000,
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', '@wdio/allure-reporter'],

    reporterOptions: {
        allure: {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        },
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (passed) {
            console.log(`Test "${test.title}" passed!`);
        } else {
            console.error(`Test "${test.title}" failed!`);

            if (error) {
                console.error(error.message);
                console.error(error.stack);
            }
            browser.takeScreenshot();
        }
    },
    onComplete: function () {
        const execSync = require('child_process').execSync;
        // Generate Allure report
        execSync('allure generate ./allure-results --clean -o ./allure-report', { stdio: 'inherit' });
        // Open Allure report in default browser
        execSync('allure open ./allure-report', { stdio: 'inherit' });
        try {
            execSync('pkill -f appium');
            console.log('Appium server stopped successfully.');
        } catch (error) {
            console.error('Error stopping Appium server:', error.message);
        }
        
    },
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

 
}

