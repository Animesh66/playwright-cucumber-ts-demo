import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open() { await this.goto('/login'); }
  async login(email: string, password: string) {
    await this.page.getByLabel('Email Address').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }
  async expectError(message: string) { await expect(this.page.getByText(message)).toBeVisible(); }
}
