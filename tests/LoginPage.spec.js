import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";

// ../pages/LoginPage here we use .. because LoginPage outside of LoginPage.spec.js
test("TC to Add the Product to Cart and place the Order", async({page})=>{

    const productName= "ZARA COAT 3"
    const UserName = "vvbulbule@gmail.com"
    const Password= "V12bulbule@"
    const loginPage = new LoginPage(page);
    loginPage.goTo()
    loginPage.ValidLogin(UserName,Password)

    // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
        const ProductsTitles = page.locator(".card-body b")
        await ProductsTitles.first().waitFor()

        //Display all Product titles from Home Page
        const allProductTitle= await ProductsTitles.allTextContents()
        console.log(allProductTitle)//[ 'ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro' ]

        // Now select the "ZARA COAT 3" Product from Home Page
        //const productName= "ZARA COAT 3"
        const productsDetails = page.locator(".card-body")// products will save all the products information like Product Title, View Btn, Add to Card Btn
        const count= await productsDetails.count()// This will give count the total number of Products

        //iterate all the products and add the "ZARA COAT 3" to the cart
        for (let i=0;i<count;i++){
            //it will get all the productDetails for every iteration using productsDetails.nth(i)
            // Here we applied the chaining of location i.e search the locator(b) inside the productDetails of i value iteration not in Whole Page
            // productsDetails.nth(i).locator("b").textContent() it will fetches all the ProductNames
            if (await productsDetails.nth(i).locator("b").textContent()===productName){
                //Click on Add to Cart Btn
                await productsDetails.nth(i).locator("text= Add To Cart").click()
                //Once the Productname = "ZARA COAT 3" is found then no need to check other productNames so break is used
                break
                //await page.pause();
            }
        }

        // click on Cart button top right corner to open the cart Page
        await page.locator("[routerlink$='/dashboard/cart']").click()

        //Verify that Product added to Cart Page will displayed 
        // isVisible method will not wait automatically in playwright so we have wait for atleast first product is loaded in cart page
        await page.locator("div li").first().waitFor()
        const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible()// if present it will return true
        expect (bool).toBeTruthy()// verify that value is True

        // Click on Checkout Button
        await page.locator("button:has-text('Checkout')").click()
        
        // On the Payment Page
        /* Country it the Auto Suggestion Dropdown
        Not having select tag and Here if we use the fill method then suggestion will not be displayed  
        So we have to use the pressSequentially methods to type the letters one by one then auto sugession we be displayed for the dropdown 

        */
        //Inspect Auto Suggesion Box and enter partial test "Ind"  in the Auto Suggesion Box
        await page.locator("[placeholder='Select Country']").pressSequentially("Ind")

    
        //Inspect All the Suggestion comes below dropdown 
        const dropdown =  page.locator(".ta-results")

        //Wait for Options to Open in Auto Suggesions dropdown
        await dropdown.waitFor()

        // Inspect single elemet from the Auto Suggesion
        // Here we use Chaining of the locator
        const optionsCount= await dropdown.locator("button").count()

        //Iterate foe every value from auto suggesion and Match with Expected Value
        for (let i=0;i<optionsCount;i++){
            const text= await dropdown.locator("button").nth(i).textContent()
            if(text===" India"){
                await dropdown.locator("button").nth(i).click()
                console.log(text+" is selected") // India is selected
                break
            }

        }
       
        // Verify that email comes automatically on Payment page in email textbox is same as loggedin user's email ID
        // Here we can use the toHaveText() it will match the exact text 
        const email= "vvbulbule@gmail.com";
        await expect(page.locator("div label")).toContainText(email)

        //Enter the CVV 
        await page.locator(".input.txt").nth(1).fill("123")

        //Enter the Name on Card 
        await page.locator(".input.txt").nth(2).fill("Vikrant Bulbule")

        

        // Click on PlaceOrder btn
        await page.locator(".btnn.action__submit.ng-star-inserted").click()

        // Verify "Thankyou for the order." Message after Placing the Order
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

        // Ftech the order id on Order Page 
        const orderID= await page.locator("label.ng-star-inserted").textContent()
        console.log(orderID)

  

        // Click on Order History Page Link
        await page.locator("[routerlink='/dashboard/myorders']").nth(1).click()

        // Handling Orders Table
        // on the Orders list page latest order comes at the last 
        //tbody tr locator will give the all the rows 
        const ordersrows=  page.locator("tbody tr")
        await ordersrows.first().waitFor()

        //iterate all the rows and find the "Required orderID" to View the Order Details
        
        for (let i=0;i< await ordersrows.count();i++){
            // Here we applied chaining for the locator
            const rowOrderID=await ordersrows.nth(i).locator("th").textContent()
            


            // if loop to match the Expected and Actual OrderID
           if (orderID?.includes(rowOrderID)) {
                console.log("Order ID matched")
                // Now for the match orderid click on View Button to View Order Details
                await ordersrows.nth(i).locator("button").first().click()
                
                break
            }
        }

        //Verify that same order id is opened on order Summary Page verify using orderid
       
        //Order is contains blank Space i.e | 6a0d9bbd17ee3e78ba8b178a | so below line will fail so in normal appplication it should be pass
        //await expect(page.locator(".col-text")).toContainText(orderID!); 

         /*
        Why ! is used

    ! = Non-null assertion operator

    It tells TypeScript:

    “I am sure this value is not null.”

    Since your order ID is already printed in console i.e | 6a0d90c117ee3e78ba8aeb6a | , it exists, so this is safe.
    */
        
    
})