# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartPage.spec.js >> TC to Add the Product to Cart and place the Order
- Location: tests\CartPage.spec.js:7:5

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
  - generic:
    - generic:
      - alert "No Product in Your Cart" [ref=e33]
      - alert "Product Added To Cart" [ref=e35]
```

# Test source

```ts
  1  | import {expect} from "@playwright/test"
  2  | export class CartPage{
  3  |     constructor (page){
  4  |         // if we want to declare any Locators then better to declare it in constructor
  5  |         // this.VariableName so this is refreing to current class variables
  6  |         // this.VariableName is class level Variables i.e We are Storing the Locotor in Variable
  7  |         // if somebody creates an object for this class LoginPage all the variables will be initialized
  8  |         this.page = page;
  9  |         this.cartProducts = page.locator("div li") // Cart product locator
  10 |         this.CheckouBtn= page.locator("button:has-text('Checkout')")// Checkout Btn
  11 |         
  12 |         
  13 |     }
  14 | 
  15 |     //Verify that Product added to Cart Page will displayed 
  16 |     // Value of this productName comes from Test Case
  17 |     async VerifyProductIsDisplayed(productName){    
> 18 |         await this.cartProducts.first().waitFor()
     |                                         ^ Error: locator.waitFor: Test timeout of 40000ms exceeded.
  19 |         const bool=await this.getProductLocator(productName).isVisible()// if present it will return true
  20 |         expect (bool).toBeTruthy()// verify that value is True
  21 |     }
  22 | 
  23 |     // This method is written for locator await page.locator("h3:has-text('ZARA COAT 3')")
  24 |     // This locator is passed to above method
  25 |     getProductLocator(productName)
  26 | {
  27 |     return  this.page.locator("h3:has-text('"+productName+"')");
  28 | }
  29 | 
  30 |     async navigateToPaymentPage(){
  31 |         await this.CheckouBtn.click()
  32 |     }
  33 |         
  34 |     
  35 | 
  36 | 
  37 | }
```