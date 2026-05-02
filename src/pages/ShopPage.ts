import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShopPage extends BasePage {
  constructor(page: Page) { super(page); }
  async openProduct(productName: string) { await this.page.getByText(productName).first().click(); }
  async expectProductVisible(productName: string) { await expect(this.page.getByText(productName).first()).toBeVisible(); }
}
