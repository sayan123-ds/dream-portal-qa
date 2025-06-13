export class DiaryPage {
  constructor(page) {
    this.page = page;
    this.rows = 'table tbody tr';
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');
  }

  async getRowCount() {
    return await this.page.locator(this.rows).count();
  }

  async getDreamData() {
    const rows = this.page.locator(this.rows);
    const count = await rows.count();
    let validRows = true;
    const dreamTypes = [];

    for (let i = 0; i < count; i++) {
      const row = rows.nth(i);
      const cells = await row.locator('td').allTextContents();

      // Check if each row has exactly 3 cells filled
      if (cells.length !== 3 || cells.some(cell => cell.trim() === '')) {
        validRows = false;
      }

      dreamTypes.push(cells[2].trim());
    }

    return {
      count,
      validRows,
      dreamTypes
    };
  }
}
