import { chromium, defineConfig, devices } from '@playwright/test';


// All Configuration key value pair is stored in this
// we need to export this defineConfig so that it will available to all files in the project
export default defineConfig({
  //const  config=({
  testDir: './tests',
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
  
  use: {
   
    // Give the browser name where we want to run the test
    // In beloe way we can do the cross browser testing
    // to run in chrome
    browserName:'chromium',
    //to run in Firefox
    //browserName:'firefox'
    //to run in safari
    //browserName:'webkit',

    // Playwright runs in headless mode by default.
    // we can run the test in head or haedless mode
    // As we have declare the headless:false here in config file so when we run the npx playwright test command then it will not run the test in headless mode i.e browser will  be opened
    // As we have declare the headless:true here in config file so when we run the npx playwright test command then it will run the test in headless mode i.e browser will not be opened

    /* when we don't declare the below line then also we can run the test 
    in headed mode Uisng  terminal command npx playwright test --headed
    in  Headless Command : npx playwright test --headless */
    headless: false,
    //To get the screenshots for every step in playwright Execution
    screenshot :'on',
    trace : 'retain-on-failure'//off,on,retain-on-failure

    
  },

});
//module.exports - config