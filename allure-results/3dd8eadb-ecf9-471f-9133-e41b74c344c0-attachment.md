# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEndPurchaseFlow.spec.ts >> TC to Add the Product to Cart and place the Order
- Location: tests\EndtoEndPurchaseFlow.spec.ts:5:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('[routerlink$=\'/dashboard/cart\']')
    - locator resolved to <button tabindex="0" _ngcontent-wjo-c38="" class="btn btn-custom" routerlink="/dashboard/cart">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-wjo-c11="" class="ngx-spinner-overlay ng-tns-c11-1 ng-trigger ng-trigger-fadeIn ng-star-inserted">…</div> from <ngx-spinner _nghost-wjo-c11="" _ngcontent-wjo-c39="" class="ng-tns-c11-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-wjo-c11="" class="ngx-spinner-overlay ng-tns-c11-1 ng-trigger ng-trigger-fadeIn ng-star-inserted">…</div> from <ngx-spinner _nghost-wjo-c11="" _ngcontent-wjo-c39="" class="ng-tns-c11-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - button " Cart 1" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
            - generic [ref=e22]: "1"
        - listitem [ref=e23] [cursor=pointer]:
          - button "Sign Out" [ref=e24]:
            - generic [ref=e25]: 
            - text: Sign Out
    - text:    
    - generic [ref=e26]:
      - paragraph [ref=e27]: Home | Search
      - heading "Filters" [level=4] [ref=e29]
      - generic [ref=e30]:
        - textbox "search" [ref=e32]
        - generic [ref=e33]:
          - heading "Price Range" [level=6] [ref=e34]
          - generic [ref=e35]:
            - textbox "Min Price" [ref=e37]
            - textbox "Max Price" [ref=e39]
        - generic [ref=e40]:
          - heading "Categories" [level=6] [ref=e41]
          - generic [ref=e43]: 
          - generic [ref=e44]:
            - checkbox [ref=e45]
            - generic [ref=e46]: fashion
          - generic [ref=e47]:
            - checkbox [ref=e48]
            - generic [ref=e49]: electronics
          - generic [ref=e50]:
            - checkbox [ref=e51]
            - generic [ref=e52]: household
        - generic [ref=e53]:
          - heading "Sub Categories" [level=6] [ref=e54]
          - generic [ref=e56]: 
          - generic [ref=e57]:
            - checkbox [ref=e58]
            - generic [ref=e59]: t-shirts
          - generic [ref=e60]:
            - checkbox [ref=e61]
            - generic [ref=e62]: shirts
          - generic [ref=e63]:
            - checkbox [ref=e64]
            - generic [ref=e65]: shoes
          - generic [ref=e66]:
            - checkbox [ref=e67]
            - generic [ref=e68]: mobiles
          - generic [ref=e69]:
            - checkbox [ref=e70]
            - generic [ref=e71]: laptops
        - generic [ref=e72]:
          - heading "Search For" [level=6] [ref=e73]
          - generic [ref=e75]: 
          - generic [ref=e76]:
            - checkbox [ref=e77]
            - generic [ref=e78]: men
          - generic [ref=e79]:
            - checkbox [ref=e80]
            - generic [ref=e81]: women
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]:
          - generic [ref=e85]: Showing 3 results |
          - generic [ref=e86]: User can only see maximum 9 products on a page
        - generic [ref=e87]:
          - generic [ref=e89]:
            - img [ref=e90]
            - generic [ref=e91]:
              - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
              - generic [ref=e94]: $ 11500
              - button "View" [ref=e95] [cursor=pointer]:
                - generic [ref=e96]: 
                - text: View
              - button " Add To Cart" [ref=e97] [cursor=pointer]:
                - generic [ref=e98]: 
                - text: Add To Cart
          - generic [ref=e100]:
            - img [ref=e101]
            - generic [ref=e102]:
              - heading "ZARA COAT 3" [level=5] [ref=e103]
              - generic [ref=e105]: $ 11500
              - button "View" [ref=e106] [cursor=pointer]:
                - generic [ref=e107]: 
                - text: View
              - button " Add To Cart" [active] [ref=e108] [cursor=pointer]:
                - generic [ref=e109]: 
                - text: Add To Cart
          - generic [ref=e111]:
            - img [ref=e112]
            - generic [ref=e113]:
              - heading "iphone 13 pro" [level=5] [ref=e114]
              - generic [ref=e116]: $ 55000
              - button "View" [ref=e117] [cursor=pointer]:
                - generic [ref=e118]: 
                - text: View
              - button " Add To Cart" [ref=e119] [cursor=pointer]:
                - generic [ref=e120]: 
                - text: Add To Cart
      - list "Pagination" [ref=e125]:
        - listitem [ref=e126]:
          - text: «
          - generic [ref=e127]:
            - text: Previous
            - generic [ref=e128]: page
        - listitem [ref=e129]:
          - generic [ref=e130]: You're on page
          - text: "1"
        - listitem [ref=e131]:
          - generic [ref=e132]:
            - text: Next
            - generic [ref=e133]: page
          - text: »
    - generic [ref=e134]: Design and Developed By - Kunal Sharma
  - alert "Product Added To Cart" [ref=e136]
```

# Test source

```ts
  1   | import {expect, test} from "@playwright/test"
  2   | 
  3   | /* Program : This is Seperaete End to End TC for Placing Order ... Just for Reference not the POM is Used in this Program */
  4   | 
  5   | test("TC to Add the Product to Cart and place the Order", async({page})=>
  6   |     {
  7   |         await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  8   |         await page.locator("#userEmail").fill("vvbulbule@gmail.com")
  9   |         await page.locator("#userPassword").fill("V12bulbule@")
  10  |         await page.locator("#login").click()
  11  | 
  12  |         // Now to get the all elemets we have to wait until at least 1 element is visible then get all other elemets
  13  |         const ProductsTitles = page.locator(".card-body b")
  14  |         await ProductsTitles.first().waitFor()
  15  | 
  16  |         //Display all Product titles from Home Page
  17  |         const allProductTitle= await ProductsTitles.allTextContents()
  18  |         console.log(allProductTitle)//[ 'ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro' ]
  19  | 
  20  |         // Now select the "ZARA COAT 3" Product from Home Page
  21  |         const productName= "ZARA COAT 3"
  22  |         const productsDetails = page.locator(".card-body")// products will save all the products information like Product Title, View Btn, Add to Card Btn
  23  |         const count= await productsDetails.count()// This will give count the total number of Products
  24  | 
  25  |         //iterate all the products and add the "ZARA COAT 3" to the cart
  26  |         for (let i=0;i<count;i++){
  27  |             //it will get all the productDetails for every iteration using productsDetails.nth(i)
  28  |             // Here we applied the chaining of location i.e search the locator(b) inside the productDetails of i value iteration not in Whole Page
  29  |             // productsDetails.nth(i).locator("b").textContent() it will fetches all the ProductNames
  30  |             if (await productsDetails.nth(i).locator("b").textContent()===productName){
  31  |                 //Click on Add to Cart Btn
  32  |                 await productsDetails.nth(i).locator("text= Add To Cart").click()
  33  |                 //Once the Productname = "ZARA COAT 3" is found then no need to check other productNames so break is used
  34  |                 break
  35  |                 //await page.pause();
  36  |             }
  37  |         }
  38  | 
  39  |         // click on Cart button top right corner to open the cart Page
> 40  |         await page.locator("[routerlink$='/dashboard/cart']").click()
      |                                                               ^ Error: locator.click: Test timeout of 40000ms exceeded.
  41  | 
  42  |         //Verify that Product added to Cart Page will displayed 
  43  |         // isVisible method will not wait automatically in playwright so we have wait for atleast first product is loaded in cart page
  44  |         await page.locator("div li").first().waitFor()
  45  |         const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible()// if present it will return true
  46  |         expect (bool).toBeTruthy()// verify that value is True
  47  | 
  48  |         // Click on Checkout Button
  49  |         await page.locator("button:has-text('Checkout')").click()
  50  |         
  51  |         // On the Payment Page
  52  |         /* Country it the Auto Suggestion Dropdown
  53  |         Not having select tag and Here if we use the fill method then suggestion will not be displayed  
  54  |         So we have to use the pressSequentially methods to type the letters one by one then auto sugession we be displayed for the dropdown 
  55  | 
  56  |         */
  57  |         //Inspect Auto Suggesion Box and enter partial test "Ind"  in the Auto Suggesion Box
  58  |         await page.locator("[placeholder='Select Country']").pressSequentially("Ind")
  59  | 
  60  |     
  61  |         //Inspect All the Suggestion comes below dropdown 
  62  |         const dropdown =  page.locator(".ta-results")
  63  | 
  64  |         //Wait for Options to Open in Auto Suggesions dropdown
  65  |         await dropdown.waitFor()
  66  | 
  67  |         // Inspect single elemet from the Auto Suggesion
  68  |         // Here we use Chaining of the locator
  69  |         const optionsCount= await dropdown.locator("button").count()
  70  | 
  71  |         //Iterate foe every value from auto suggesion and Match with Expected Value
  72  |         for (let i=0;i<optionsCount;i++){
  73  |             const text= await dropdown.locator("button").nth(i).textContent()
  74  |             if(text===" India"){
  75  |                 await dropdown.locator("button").nth(i).click()
  76  |                 console.log(text+" is selected") // India is selected
  77  |                 break
  78  |             }
  79  | 
  80  |         }
  81  |        
  82  |         // Verify that email comes automatically on Payment page in email textbox is same as loggedin user's email ID
  83  |         // Here we can use the toHaveText() it will match the exact text 
  84  |         const email= "vvbulbule@gmail.com";
  85  |         await expect(page.locator("div label")).toContainText(email)
  86  | 
  87  |         //Enter the CVV 
  88  |         await page.locator(".input.txt").nth(1).fill("123")
  89  | 
  90  |         //Enter the Name on Card 
  91  |         await page.locator(".input.txt").nth(2).fill("Vikrant Bulbule")
  92  | 
  93  |         
  94  | 
  95  |         // Click on PlaceOrder btn
  96  |         await page.locator(".btnn.action__submit.ng-star-inserted").click()
  97  | 
  98  |         // Verify "Thankyou for the order." Message after Placing the Order
  99  |         await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
  100 | 
  101 |         // Ftech the order id on Order Page 
  102 |         const orderID= await page.locator("label.ng-star-inserted").textContent()
  103 |         console.log(orderID)
  104 | 
  105 |   
  106 | 
  107 |         // Click on Order History Page Link
  108 |         await page.locator("[routerlink='/dashboard/myorders']").nth(1).click()
  109 | 
  110 |         // Handling Orders Table
  111 |         // on the Orders list page latest order comes at the last 
  112 |         //tbody tr locator will give the all the rows 
  113 |         const ordersrows=  page.locator("tbody tr")
  114 |         await ordersrows.first().waitFor()
  115 | 
  116 |         //iterate all the rows and find the "Required orderID" to View the Order Details
  117 |         
  118 |         for (let i=0;i< await ordersrows.count();i++){
  119 |             // Here we applied chaining for the locator
  120 |             const rowOrderID=await ordersrows.nth(i).locator("th").textContent()
  121 |             
  122 | 
  123 | 
  124 |             // if loop to match the Expected and Actual OrderID
  125 |             if(orderID?.includes(rowOrderID!)){
  126 |                 console.log("Order ID matched")
  127 |                 // Now for the match orderid click on View Button to View Order Details
  128 |                 await ordersrows.nth(i).locator("button").first().click()
  129 |                 
  130 |                 break
  131 |             }
  132 |         }
  133 | 
  134 |         //Verify that same order id is opened on order Summary Page verify using orderid
  135 |        
  136 |         //Order is contains blank Space i.e | 6a0d9bbd17ee3e78ba8b178a | so below line will fail so in normal appplication it should be pass
  137 |         //await expect(page.locator(".col-text")).toContainText(orderID!); 
  138 | 
  139 |          /*
  140 |         Why ! is used
```