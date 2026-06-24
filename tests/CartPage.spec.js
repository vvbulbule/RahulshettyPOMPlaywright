import {expect, test} from "@playwright/test"
import {POManager} from "../pages/POManager";

/* 
Program : This Program just cover the POM till Cart page and Complete Flow till Placing Order and verify the Order ID in OrdersHistory Page is Covered Under i.e. OrderHistoryPage.spec.js */

test("TC to Add the Product to Cart and place the Order", async({page})=>{

    const productName= "ZARA COAT 3"
    const UserName = "vvbulbule@gmail.com"
    const Password= "V12bulbule@"
    
   /* In Below Line i.e  const loginPage = new LoginPage(page) we Created the object of LoginPage 
   as we need to access the methods but if we have to get the methods from multiple page in our Test case  we have to create object of every page
     so to avoid this we can create One POManger File with all the Objects of all Classes of our Application 
     so just import that POManger file  & call the methods of all The PO Classes by Creating Object of single file POManager In Test Case*/
    //const loginPage = new LoginPage(page) ;
    //await  loginPage.goTo()
    //await loginPage.ValidLogin(UserName,Password)

    const poManger = new POManager(page)
    const loginPage = poManger.getLoginPage();
    await loginPage.goTo()
    await loginPage.ValidLogin(UserName,Password)
    const dashboardPage = poManger.getDashboardPage()
    await dashboardPage.searchProductAndAddToCart(productName)
    await dashboardPage.navigateToCartPage()
    const cartPage = poManger.getCartPage()
    await cartPage.VerifyProductIsDisplayed(productName)
    await cartPage.navigateToPaymentPage()


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





   })