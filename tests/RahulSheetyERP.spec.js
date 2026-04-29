const { test,expect} =require('@playwright/test');

test('Testcase E2E scenario', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('msmistry85@gmail.com');
    await page.locator('#userPassword').fill('Mehul@123');
    await page.locator('#login').click();
   //await page.locator('.card-body').first().waitFor();
    await page.waitForLoadState('networkidle');
    const title = await page.locator(".card-body b").allTextContents();

    console.log(title);

    const Products = await page.locator('.card-body');
    const cnt = await page.locator('.card-body').count();

    for(let i = 0; i < cnt; ++i)
    {
        //console.log(await Products.nth(i).locator('b').textContent());
          if( await Products.nth(i).locator('b').textContent() === 'ZARA COAT 3')
          {
            console.log(i);
                await Products.nth(i).locator('text= Add To Cart').click();
                break;
          }
    }    
    await page.locator("[routerlink*='cart']").click();
    
    expect(await page.locator('.cartSection h3').textContent("ZARA COAT 3"))

    await page.locator('text=Checkout').click();
    
});