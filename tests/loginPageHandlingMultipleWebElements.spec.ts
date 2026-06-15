/*This Program is to Handle multiple webElemets having the same locator value*/
/* if the file does not contains .spec.ts at the end then So VS Code treats it as normal TypeScript file, not a test file.
 If .spec is missing at the the end of file name → test will not run.
So .spec is compuslsory in every playwright file and extension is ts
*/
import {test} from "@playwright/test"

test("TC to Handle multiple webElemets having the same locator value" , async ({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //await required for only the action step
    // Below line will store the WebElement into the Username just like WebElement Store in Selenium
    const username= page.locator("#username")
    const password = page.locator("#password")
    const SignInBtn = page.locator("#signInBtn")
    
    //Entered the Username "rahulshettyacademyInvalid" 
    await username.fill("rahulshettyacademyInvalid");

    // Using fill method only we can cleared the entered text
    await username.fill("")
    // Now Entered the Valid Username
    await username.fill("rahulshettyacademy")
    //  Entered the Valid Password
    await password.fill("Learning@830$3mK2")
    await SignInBtn.click()// After we click on signin then it will wait till page open 40 sec i.e. timeout:40 *1000 as per mention in config file

    //Below element locator will match the 4 elemets on the page so it will gives the error after execution
    // It will give the error "Error: strict mode violation: locator('.card-body a') resolved to 4 elements:"
    // textContent() will wait till page open 40 sec i.e. timeout:40 *1000 as per mention because it will retuen only one element
    //console.log(await page.locator(".card-body a").textContent())

    //Now tell the playwright to take the 1st element we can use nth(0) .. Index starts from 0
    //textContent() will wait till page open 40 sec i.e. timeout:40 *1000 as per mention because it will retuen only one element
    //console.log(await page.locator(".card-body a").nth(0).textContent())//iphone X 

    //simimarly we can use the first and last to udentify 1st and last element from the locator
    //console.log(await page.locator(".card-body a").first().textContent())//iphone X 
    //console.log(await page.locator(".card-body a").last().textContent())//Blackberry

    // Apart from first and last if we want to identify other elemets then we have to use nth method only
    // Below line will give the second element Text
    //console.log(await page.locator(".card-body a").nth(1).textContent())//Samsung Note 8

    /* To get all the elements text we can use allTextContents Methods
     but allTextContents will not wait till page open 40 sec i.e. timeout:40 *1000 as per mention because it will retuen list of element
     It will return the empty list of Array
     allTextContents() does NOT wait for elements to appear

    So what happens:

    Page is still loading ⏳

    Elements are not yet in DOM

    Playwright executes immediately ⚡

    Returns → []
    */
    console.log(await page.locator(".card-body a").allTextContents())// [] it will return the empty list



    // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
    const products = page.locator(".card-body a");
    await products.first().waitFor();

    const allTexts = await products.allTextContents();// [ 'iphone X', 'Samsung Note 8', 'Nokia Edge', 'Blackberry' ]
    console.log(allTexts);
})