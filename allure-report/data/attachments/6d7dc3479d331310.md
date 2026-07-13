# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> TC to Add the Product to Cart and place the Order
- Location: tests\LoginPage.spec.js:11:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
        - /url: https://techsmarthire.com/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "My Cart" [level=1] [ref=e27]
        - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
      - heading "No Products in Your Cart !" [level=1] [ref=e30]
  - alert "No Product in Your Cart" [ref=e33]
```

# Test source

```ts
  1   | import {expect, test} from "@playwright/test"
  2   | //import { LoginPage } from "../pages/LoginPage";
  3   | import {POManager} from "../pages/POManager";
  4   | 
  5   | // ../pages/LoginPage here we use .. because LoginPage outside of LoginPage.spec.js
  6   | 
  7   | /* 
  8   | 
  9   | Program : This Program just cover the POM till LoginPage and Complete Flow till Placing Order and verify the Order ID in OrdersHistory Page is Covered Under  i.e. OrderHistoryPage.spec.js */
  10  | test.describe.configure({mode:'default'})
  11  | test("TC to Add the Product to Cart and place the Order", async({page})=>{
  12  | 
  13  |     const productName= "ZARA COAT 3"
  14  |     const UserName = "vvbulbule@gmail.com"
  15  |     const Password= "V12bulbule@"
  16  | 
  17  |     /* In Below Line i.e  const loginPage = new LoginPage(page) we Created the object of LoginPage 
  18  |    as we need to access the methods but if we have to get the methods from multiple page in our Test case  we have to create object of every page
  19  |      so to avoid this we can create One POManger File with all the Objects of all Classes of our Application 
  20  |      so just import that POManger file  & call the methods of all The PO Classes by Creating Object of single file POManager In Test Case*/
  21  |     //const loginPage = new LoginPage(page) ;
  22  | 
  23  |     const poManger = new POManager(page)
  24  |     const loginPage = poManger.getLoginPage();
  25  |     await loginPage.goTo()
  26  |     await loginPage.ValidLogin(UserName,Password)
  27  | 
  28  |     // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
  29  |         const ProductsTitles = page.locator(".card-body b")
  30  |         await ProductsTitles.first().waitFor()
  31  | 
  32  |         //Display all Product titles from Home Page
  33  |         const allProductTitle= await ProductsTitles.allTextContents()
  34  |         console.log(allProductTitle)//[ 'ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro' ]
  35  | 
  36  |         // Now select the "ZARA COAT 3" Product from Home Page
  37  |         //const productName= "ZARA COAT 3"
  38  |         const productsDetails = page.locator(".card-body")// products will save all the products information like Product Title, View Btn, Add to Card Btn
  39  |         const count= await productsDetails.count()// This will give count the total number of Products
  40  | 
  41  |         //iterate all the products and add the "ZARA COAT 3" to the cart
  42  |         for (let i=0;i<count;i++){
  43  |             //it will get all the productDetails for every iteration using productsDetails.nth(i)
  44  |             // Here we applied the chaining of location i.e search the locator(b) inside the productDetails of i value iteration not in Whole Page
  45  |             // productsDetails.nth(i).locator("b").textContent() it will fetches all the ProductNames
  46  |             if (await productsDetails.nth(i).locator("b").textContent()===productName){
  47  |                 //Click on Add to Cart Btn
  48  |                 await productsDetails.nth(i).locator("text= Add To Cart").click()
  49  |                 //Once the Productname = "ZARA COAT 3" is found then no need to check other productNames so break is used
  50  |                 break
  51  |                 //await page.pause();
  52  |             }
  53  |         }
  54  | 
  55  |         // click on Cart button top right corner to open the cart Page
  56  |         await page.locator("[routerlink$='/dashboard/cart']").click()
  57  | 
  58  |         //Verify that Product added to Cart Page will displayed 
  59  |         // isVisible method will not wait automatically in playwright so we have wait for atleast first product is loaded in cart page
> 60  |         await page.locator("div li").first().waitFor()
      |                                              ^ Error: locator.waitFor: Test timeout of 40000ms exceeded.
  61  |         const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible()// if present it will return true
  62  |         expect (bool).toBeTruthy()// verify that value is True
  63  | 
  64  |         // Click on Checkout Button
  65  |         await page.locator("button:has-text('Checkout')").click()
  66  |         
  67  |         // On the Payment Page
  68  |         /* Country it the Auto Suggestion Dropdown
  69  |         Not having select tag and Here if we use the fill method then suggestion will not be displayed  
  70  |         So we have to use the pressSequentially methods to type the letters one by one then auto sugession we be displayed for the dropdown 
  71  | 
  72  |         */
  73  |         //Inspect Auto Suggesion Box and enter partial test "Ind"  in the Auto Suggesion Box
  74  |         await page.locator("[placeholder='Select Country']").pressSequentially("Ind")
  75  | 
  76  |     
  77  |         //Inspect All the Suggestion comes below dropdown 
  78  |         const dropdown =  page.locator(".ta-results")
  79  | 
  80  |         //Wait for Options to Open in Auto Suggesions dropdown
  81  |         await dropdown.waitFor()
  82  | 
  83  |         // Inspect single elemet from the Auto Suggesion
  84  |         // Here we use Chaining of the locator
  85  |         const optionsCount= await dropdown.locator("button").count()
  86  | 
  87  |         //Iterate foe every value from auto suggesion and Match with Expected Value
  88  |         for (let i=0;i<optionsCount;i++){
  89  |             const text= await dropdown.locator("button").nth(i).textContent()
  90  |             if(text===" India"){
  91  |                 await dropdown.locator("button").nth(i).click()
  92  |                 console.log(text+" is selected") // India is selected
  93  |                 break
  94  |             }
  95  | 
  96  |         }
  97  |        
  98  |         // Verify that email comes automatically on Payment page in email textbox is same as loggedin user's email ID
  99  |         // Here we can use the toHaveText() it will match the exact text 
  100 |         const email= "vvbulbule@gmail.com";
  101 |         await expect(page.locator("div label")).toContainText(email)
  102 | 
  103 |         //Enter the CVV 
  104 |         await page.locator(".input.txt").nth(1).fill("123")
  105 | 
  106 |         //Enter the Name on Card 
  107 |         await page.locator(".input.txt").nth(2).fill("Vikrant Bulbule")
  108 | 
  109 |         
  110 | 
  111 |         // Click on PlaceOrder btn
  112 |         await page.locator(".btnn.action__submit.ng-star-inserted").click()
  113 | 
  114 |         // Verify "Thankyou for the order." Message after Placing the Order
  115 |         await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
  116 | 
  117 |         // Ftech the order id on Order Page 
  118 |         const orderID= await page.locator("label.ng-star-inserted").textContent()
  119 |         console.log(orderID)
  120 | 
  121 |   
  122 | 
  123 |         // Click on Order History Page Link
  124 |         await page.locator("[routerlink='/dashboard/myorders']").nth(1).click()
  125 | 
  126 |         // Handling Orders Table
  127 |         // on the Orders list page latest order comes at the last 
  128 |         //tbody tr locator will give the all the rows 
  129 |         const ordersrows=  page.locator("tbody tr")
  130 |         await ordersrows.first().waitFor()
  131 | 
  132 |         //iterate all the rows and find the "Required orderID" to View the Order Details
  133 |         
  134 |         for (let i=0;i< await ordersrows.count();i++){
  135 |             // Here we applied chaining for the locator
  136 |             const rowOrderID=await ordersrows.nth(i).locator("th").textContent()
  137 |             
  138 | 
  139 | 
  140 |             // if loop to match the Expected and Actual OrderID
  141 |            if (orderID?.includes(rowOrderID)) {
  142 |                 console.log("Order ID matched")
  143 |                 // Now for the match orderid click on View Button to View Order Details
  144 |                 await ordersrows.nth(i).locator("button").first().click()
  145 |                 
  146 |                 break
  147 |             }
  148 |         }
  149 | 
  150 |         //Verify that same order id is opened on order Summary Page verify using orderid
  151 |        
  152 |         //Order is contains blank Space i.e | 6a0d9bbd17ee3e78ba8b178a | so below line will fail so in normal appplication it should be pass
  153 |         //await expect(page.locator(".col-text")).toContainText(orderID!); 
  154 | 
  155 |          /*
  156 |         Why ! is used
  157 | 
  158 |     ! = Non-null assertion operator
  159 | 
  160 |     It tells TypeScript:
```