import { test, expect } from '@playwright/test';
import { classifyDream } from '../utils/openaiClassifier.js';

test.describe('AI Dream Type Validation', () => {
  test('Classify and compare dream types using OpenAI', async ({ page }) => {
    await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

    const rows = page.locator('table tbody tr');
    const count = await rows.count();

    for (let i = 0; i < count; i++) {
      const row = rows.nth(i);
      const cells = await row.locator('td').allTextContents();

      const dreamName = cells[0].trim();
      const actualType = cells[2].trim();

      const aiType = await classifyDream(dreamName);

      console.log(`Dream: ${dreamName} | Expected: ${actualType} | AI: ${aiType}`);
      expect(['Good', 'Bad']).toContain(aiType);
      expect(aiType).toBe(actualType);  // Optional: log mismatch only
    }
  });
});