import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skleptest.pl/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('belt');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByText('Search Results for: belt 12Jun FITT Belts By franek / 1 Comments Lorem ipsum').click();
  await expect(page.getByText('Search Results for: belt 12Jun FITT Belts By franek / 1 Comments Lorem ipsum')).toBeVisible();
  await page.getByRole('link', { name: 'FITT Belts' }).click();
  await page.getByLabel('Quantity').click();
  await page.getByLabel('Quantity').fill('1');
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await expect(page.getByText('View cart “FITT Belts” has')).toBeVisible();
  await expect(page.getByRole('link', { name: ' My Cart - zł' })).toBeVisible();
  await page.getByRole('link', { name: 'View cart' }).click();
  await expect(page.getByRole('cell', { name: 'FITT Belts' })).toBeVisible();
  await page.getByLabel('Remove this item').click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('button', { name: 'Update cart' }).click();
  await expect(page.getByText('Your cart is currently empty.')).toBeVisible();
});