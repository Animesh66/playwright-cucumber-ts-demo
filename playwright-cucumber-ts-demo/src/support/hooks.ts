import { After, Before, Status } from '@cucumber/cucumber';
import { chromium, request } from '@playwright/test';
import { CustomWorld } from './world';
import { config } from './config';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: config.headless });
  this.context = await this.browser.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: 'reports/videos/' } });
  this.page = await this.context.newPage();
  this.api = await request.newContext({ baseURL: config.apiUrl });
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
  await this.api?.dispose();
  await this.context?.close();
  await this.browser?.close();
});
