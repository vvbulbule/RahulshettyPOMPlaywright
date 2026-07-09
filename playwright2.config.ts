import { chromium, defineConfig, devices } from '@playwright/test';


// All Configuration key value pair is stored in this
// we need to export this defineConfig so that it will available to all files in the project
export default defineConfig({
  //const  config=({
  testDir: './tests',
  //retries: 1,
  //by default timeout is of 30 sec 
  // only if we want to overwrite the default timeout we need to defined it otherwise no need
  // Timeout of 40 sec to wait for perticular element
  // this time out is for every steps in playwright and components
  timeout:40 *1000,
  // for assertion validation we use expect timeout
  expect:{
  timeout: 5000,
  },
 // Once all the test run below line give the report in html
 reporter:'html',

 projects : [

    {
        name : "Firefox",
        use: {
    browserName:'firefox',
    headless: true,
    screenshot :'on',
    trace : 'retain-on-failure',//off,on,retain-on-failure
    
            }
    },

    {
        name : "Chrome",
        use: {
    browserName:'chromium',
    headless: false,
    screenshot :'on',//off,on,retain-on-failure
    video:'retain-on-failure',//off,on,retain-on-failure
    trace : 'retain-on-failure',//off,on,retain-on-failure
    //viewport:{width:720,height:720}// Browser Size to Open for Execution
    //...devices['Galaxy Note 3'],
    permissions:['geolocation'] // To Allow location when website is Open
            }
    },

     {
        name : "Safari",
        use: {
    browserName:'webkit',
    headless: false,
    screenshot :'on',//off,on,retain-on-failure
    trace : 'retain-on-failure',//off,on,retain-on-failure
    //...devices['iPhone 11 Pro'],
    //ignoreHTTPSErrors: true // for Non Http Websites
    

            }
    },
    
 ]
  
  ,

});
