const {test,expect} = require('@playwright/test');
const { asyncWrapProviders } = require('node:async_hooks');


test ('assignemtn 1',async({page})=>{

    //Steps 1
    await page.goto('https://eventhub.rahulshettyacademy.com');
    await page.locator('#email').fill("msmistry85@gmail.com");
    await page.locator('#password').fill("Mehul@123");
    await page.locator('#login-btn').click();
    expect(await page.locator('/html/body/main/div/section[1]/div[2]/div/a[1]/span').getByText('Browse Events →'));

    //Steps 2
    /*await page.locator('//*[@id="nav-events"]').click();
    await page.locator('[Type=button]').click();
    await page.locator('//*[@id="event-title-input"]').fill('X-Mas Sales');
    await page.locator('//*[@id="admin-event-form"]/div[1]/div[2]/textarea').fill('Awsome X-Mas Sales available.');
    await page.locator('#category').selectOption('Concert');
    await page.locator('#city').fill('Vadodara');
    await page.locator('#venue').fill('Vadodara');
    await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');
    await page.locator('//*[@id="price-($)"]').fill('400');
    await page.locator('//*[@id="total-seats"]').fill('5000');
    await page.locator('//*[@id="add-event-btn"]').click();*/
     //Steps 3
     await page.goto('https://eventhub.rahulshettyacademy.com/events');
     //const allevents = page.locator('event-card');
     //await expect(allevents.first()).toBeVisible();
     //console.log(allevents);
     await page.locator('/html/body/main/div/div[2]/div/div[1]/input').fill('X-Mas Sales');
     await page.locator('#book-now-btn').click();
     
      

});