/* if the file does not contains .spec.ts at the end then So VS Code treats it as normal TypeScript file, not a test file.
 If .spec is missing at the the end of file name → test will not run.
So .spec is compuslsory in every playwright file and extension is ts
*/

import {test,expect} from  "@playwright/test";


test('Login Test with Valid Credentials', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    //Playwright supports CSS and Xpath locators to identify the elements
    // Playwright recommended to use the CSS to identify the elements
    // enter  the text into the editbox we can use type or fill both are same but in latest playwright type is depricated
    // Enter the rahulshettyacademy in username
    await page.locator("#username").fill("rahulshettyacademy")//id=username
    await page.locator("[type='password']").fill('Learning@830$3mK2')//type="password"
    await page.locator("#signInBtn").click()

})

test('Login Test with Incorrect username/password.', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")//id=username
    await page.locator("[type='password']").fill('Learning')//InValid value for Password
    await page.locator("#signInBtn").click()
    // AFter clicking in signin Btn will show the message after 2 second then message will be disappear "Incorrect username/password."
    // So we need to identify some mechanisum so that we can fetch the error message
    //Observe that after clicking on signin button in page DOM style="display: block;" will be show for 1 or 2 seconds then it will dissapear
    // So we need to fetch error test within that 1 or 2 seconds
    // Playwirht will automatically wait for 40 seconds as timeout:40 *1000 is declared in side the playwright.config.ts file
    // timeout:40 *1000 is applicable to the steps apart form assert so we don't have to provide any timeout seperatly for every steps
    // for assert we have expect:{ timeout: 5000,} in playwright.config.ts file
    //textContent will fetch the string from the element identified i.e from error message
    console.log(await page.locator("[style='display: block;']").textContent())

    // Using assert check the text of error message
    await expect(page.locator("[style='display: block;']")).toContainText("Incorrect username/password.");

})