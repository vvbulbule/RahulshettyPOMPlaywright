import {expect, test} from "@playwright/test"
import {POManager} from "../pages/POManager";

/* 
Program : This Program just cover the POM till Payment Page page and Complete Flow till Placing Order and verify the Order ID in OrdersHistory Page is Covered Under  i.e. OrderHistoryPage.spec.js */

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
    const paymentPage=poManger.getPaymentPage()
    await paymentPage.searchCountryAndSelect("ind"," India")
    const orderID = await paymentPage.SubmitAndGetOrderId("123","Vikrant Bulbule");
    console.log(orderID);
    await dashboardPage.navigateToOrdersPage();

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