import { Page } from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly UsernameInput;
    readonly PasswordInput;
    readonly LoginButton;
    constructor(page:Page)
    {
        this.page = page;
        this.UsernameInput = page.locator('#username');
        this.PasswordInput = page.locator('#password');
        this.LoginButton = page.locator('#signInBtn');
    }
    async goto(){
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        //await this.page.goto('https://google.com');
    }
    async LoginIntoPage(username: string, password: string){
        await this.UsernameInput.fill(username);
        await this.PasswordInput.fill(password);
        await this.LoginButton.click();
    }


}
