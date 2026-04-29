const {test, expect} = require('@playwright/test');
import { only } from 'node:test';
import { LoginPage } from './POM/LoginPage';
import {HomePage} from './POM/HomePage';



test('Testcase 01 : Check with invalid Username Password',async ({page})=> 
{
    const LoginPage1 = new LoginPage(page)
    await LoginPage1.goto();
    await LoginPage1.LoginIntoPage('mehul','mehul')
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect'); 
    await console.log('Page is loaded');
});

test ('Testcase 02 : Successfull login and redirect to Home page',async({page})=>{
    const LoginPage1 = new LoginPage(page)
    await LoginPage1.goto();
    await LoginPage1.LoginIntoPage('rahulshettyacademy','Learning@830$3mK2')
    console.log(page.title(page));
    //await expect(page.title().textContent(page.title(page)));
    //await expect(page.title()).toContain('ProtoCommerce');   
});

test('Testcase 03 list of all Inventory',async ({page})=>{

    const LoginPage1 = new LoginPage(page)
    const HomePage1 = new HomePage(page)
    await LoginPage1.goto();
    await LoginPage1.LoginIntoPage('rahulshettyacademy','Learning@830$3mK2')
    await HomePage1.LoadAllInventory();
    page.pause;
});

//test.only('Testcase 03 E2E Scenario',async ({page})=>{

//});