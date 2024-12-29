import { test, expect } from '@playwright/test'

test('サンプルのテスト', async ({ page }) => {
  await page.goto('http://localhost:3000')
  // すべてのh3タグを取得
  const h3Elements = await page.locator('h3');

  // すべてのh3タグのテキストをSetに格納
  const h3Texts = new Set();
  const count = await h3Elements.count();
  
  for (let i = 0; i < count; i++) {
    const h3Text = await h3Elements.nth(i).textContent();
    h3Texts.add(h3Text);
  }

  // Setに特定の文字列が含まれているか確認
  const containsSpecificText = Array.from(h3Texts).some(text => text.includes('素因数分解'));

  // 1つでも見つかればテスト成功
  expect(containsSpecificText).toBe(true);
})