import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page: Page) { super(page); }
  async open() { await this.goto('/register'); }
  async submit(user: { name: string; email: string; password: string; confirmPassword: string; gender: string; dateOfBirth: string }) {
    await this.page.getByLabel('Full Name').fill(user.name);
    await this.page.getByLabel('Email Address').fill(user.email);
    await this.page.getByLabel('Password', { exact: true }).fill(user.password);
    await this.page.getByLabel('Confirm Password').fill(user.confirmPassword);
    if (user.gender) await this.page.getByLabel(new RegExp(user.gender, 'i')).check();
    await this.page.getByLabel('Date of Birth').fill(user.dateOfBirth);
    await this.page.getByRole('button', { name: /create account|register/i }).click();
  }
  async expectFeedback(message: string) { await expect(this.page.getByText(new RegExp(message, 'i'))).toBeVisible(); }
}
