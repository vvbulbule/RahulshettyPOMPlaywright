import {expect, test} from "@playwright/test"

test("TC to Add the Product to Cart and place the Order", async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
        await page.getByPlaceholder("email@example.com").fill("vvbulbule@gmail.com")
        await page.getByPlaceholder("enter your passsword").fill("V12bulbule@")
        await page.getByRole("button",{name:"Login"}).click()
        

        await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add To Cart" }).click() 
        
        // click on Cart button top right corner to open the cart Page
        await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click()
        

        //Verify that Product added to Cart Page will displayed 
        // isVisible method will not wait automatically in playwright so we have wait for atleast first product is loaded in cart page
        await page.locator("div li").first().waitFor()
        await expect(page.getByText("ZARA COAT 3")).toBeVisible();

        // Click on Checkout Button
        await page.getByRole("button", {name:"Checkout"}).click()
        
        // On the Payment Page
        /* Country it the Auto Suggestion Dropdown
        Not having select tag and Here if we use the fill method then suggestion will not be displayed  
        So we have to use the pressSequentially methods to type the letters one by one then auto sugession we be displayed for the dropdown 

        */
        //Inspect Auto Suggesion Box and enter partial test "Ind"  in the Auto Suggesion Box
        await page.getByPlaceholder("Select Country").pressSequentially("Ind")

    
        await page.getByRole("button",{name:"India"}).nth(1).click()
        
       
        // email comes automatically on Payment page in email textbox is same as loggedin user's email ID       

        //Enter the CVV 
        await page.locator(".input.txt").nth(1).fill("123")
        
        //Enter the Name on Card 
        await page.locator(".input.txt").nth(2).fill("Vikrant Bulbule")

        

        // Click on PlaceOrder btn
        await page.getByText("PLACE ORDER").click()
        //await page.locator(".btnn.action__submit.ng-star-inserted").click()

        // Verify "Thankyou for the order." Message after Placing the Order
        await expect(page.getByText("Thankyou for the order.")).toBeVisible()

        
        
    }

)