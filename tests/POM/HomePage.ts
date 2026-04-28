import { Page } from '@playwright/test'


export class HomePage{
    readonly page: Page;

    constructor(Page:Page)
    {
        this.page = Page;
    }

    async LoadAllInventory()
    {
        console.log('Load all Home page')
    }
}