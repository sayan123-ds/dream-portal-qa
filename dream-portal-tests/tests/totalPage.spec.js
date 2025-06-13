import { test, expect } from '@playwright/test';
import { TotalPage } from '../pages/TotalPage.js';

test.describe('Summary Page Tests', () => {
  test('Validate dream stats and recurring items', async ({ page }) => {
    const summary = new TotalPage(page);
    await summary.navigate();

    const { good, bad, total, recurring, recurringDreams } = await summary.getStats();

    expect(good).toBe(6);
    expect(bad).toBe(4);
    expect(total).toBe(10);
    expect(recurring).toBe(2);
    expect(recurringDreams).toEqual(expect.arrayContaining([
      'Flying over mountains',
      'Lost in maze'
    ]));
  });
});