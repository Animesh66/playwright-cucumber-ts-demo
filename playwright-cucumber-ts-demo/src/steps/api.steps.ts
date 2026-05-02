import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('I request all products from the API', async function (this: CustomWorld) {
  this.lastResponse = await this.api.get('/products');
  this.lastJson = await this.lastResponse.json();
  this.firstApiProductName = Array.isArray(this.lastJson) ? this.lastJson[0]?.name : undefined;
});

Then('the API response status should be {int}', async function (this: CustomWorld, status: number) {
  expect(this.lastResponse.status()).toBe(status);
});

Then('the API response should contain products', async function (this: CustomWorld) {
  expect(Array.isArray(this.lastJson)).toBeTruthy();
  expect(this.lastJson.length).toBeGreaterThan(0);
});
