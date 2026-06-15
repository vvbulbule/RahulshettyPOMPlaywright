export class LoginPage{

    constructor (page){
        // if we want to declare any Locators then better to declare it in constructor
        // this.VariableName so this is refreing to current class variables
        // this.VariableName is class level Variables i.e We are Storing the Locotor in Variable
        // if somebody creates an object for this class LoginPage all the variables will be initialized
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginBtn = page.locator("#login");
    }

    // Methos 1: Goto Page
    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }

    // Method 2: Login Method
    // Value for UserName & Password should be coming from Test
    // async we need to use with await
    async ValidLogin(UserName,Password){
        await this.username.fill(UserName)
        await this.password.fill(Password)
        await this.loginBtn.click()
    }
}
