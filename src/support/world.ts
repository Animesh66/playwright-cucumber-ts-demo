import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { APIRequestContext, Browser, BrowserContext, Page, request } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  api!: APIRequestContext;
  lastResponse: any;
  lastJson: any;
  firstApiProductName?: string;
  token?: string;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
