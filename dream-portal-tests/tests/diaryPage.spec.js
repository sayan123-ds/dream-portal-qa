import { test, expect } from '@playwright/test';
import { DiaryPage } from '../pages/DiaryPage.js';

test.describe('Diary Page Tests', () => {
  test('Validate dream entries and structure', async ({ page }) => {
    const diary = new DiaryPage(page);

    await diary.navigate();
    const { count, validRows, dreamTypes } = await diary.getDreamData();

    expect(count).toBe(10);
    expect(validRows).toBeTruthy();
    for (const type of dreamTypes) {
      expect(['Good', 'Bad']).toContain(type);
    }
  });
});
