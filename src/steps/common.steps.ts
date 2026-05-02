import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { config } from '../support/config';
import { ShopPage } from '../pages/ShopPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


Given('I open the demo application', async function (this: CustomWorld) {
  await this.page.goto(config.baseUrl);
});

Then('I should see the home page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*localhost.*|.*home.*|.*5173.*/);
  await expect(this.page.getByRole('navigation').or(this.page.locator('body'))).toBeVisible();
});

When('I navigate to the {string} page', async function (this: CustomWorld, pageName: string) {
  await this.page.getByRole('link', { name: new RegExp(pageName, 'i') }).click();
});

Then('the page URL should contain {string}', async function (this: CustomWorld, path: string) {
  await expect(this.page).toHaveURL(new RegExp(path.replace('/', '\\/')));
});

Given('I am on the register page', async function (this: CustomWorld) {
  await new RegisterPage(this.page).open();
});

When('I submit registration with name {string}, email {string}, password {string}, confirm password {string}, gender {string} and date of birth {string}', async function (this: CustomWorld, name: string, email: string, password: string, confirmPassword: string, gender: string, dateOfBirth: string) {
  await new RegisterPage(this.page).submit({ name, email, password, confirmPassword, gender, dateOfBirth });
});

Then('I should see registration feedback {string}', async function (this: CustomWorld, message: string) {
  await new RegisterPage(this.page).expectFeedback(message);
});

Given('I am on the login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).open();
});

When('I login with email {string} and password {string}', async function (this: CustomWorld, email: string, password: string) {
  await new LoginPage(this.page).login(email, password);
});

Then('I should see login error {string}', async function (this: CustomWorld, message: string) {
  await new LoginPage(this.page).expectError(message);
});

When('I add the following product to the cart', async function (this: CustomWorld, table) {
  const product = table.hashes()[0];
  await this.page.getByRole('link', { name: /shop/i }).click();
  await this.page.getByText(product.productName).first().click();
  await this.page.getByRole('button', { name: /add to cart/i }).click();
});

Then('my cart should contain {string}', async function (this: CustomWorld, productName: string) {
  await this.page.getByRole('link', { name: /cart/i }).click();
  await expect(this.page.getByText(productName).first()).toBeVisible();
});

When('I open product details for {string}', async function (this: CustomWorld, productName: string) {
  await new ShopPage(this.page).openProduct(productName);
});

Then('I should see product details for {string}', async function (this: CustomWorld, productName: string) {
  await expect(this.page.getByRole('heading', { name: new RegExp(productName, 'i') }).or(this.page.getByText(productName).first())).toBeVisible();
});

Then('the shop page should show the first API product', async function (this: CustomWorld) {
  if (!this.firstApiProductName) throw new Error('No API product saved in World');
  await expect(this.page.getByText(this.firstApiProductName).first()).toBeVisible();
});
