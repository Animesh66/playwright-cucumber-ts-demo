import { expect, Page } from '@playwright/test';
import { config } from '../support/config';

export class BasePage {
  constructor(protected page: Page) {}
  async goto(path = '/') { await this.page.goto(new URL(path, config.baseUrl).toString()); }
  async expectUrlContains(path: string) { await expect(this.page).toHaveURL(new RegExp(path.replace('/', '\\/'))); }
}
