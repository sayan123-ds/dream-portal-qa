export class TotalPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      goodDreams: '#good',
      badDreams: '#bad',
      totalDreams: '#total',
      recurringDreams: '#recurring',
      recurringList: '#recurringList li'
    };
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');
  }

  async getStats() {
    const good = parseInt(await this.page.textContent(this.selectors.goodDreams));
    const bad = parseInt(await this.page.textContent(this.selectors.badDreams));
    const total = parseInt(await this.page.textContent(this.selectors.totalDreams));
    const recurring = parseInt(await this.page.textContent(this.selectors.recurringDreams));

    const recurringDreams = await this.page.locator(this.selectors.recurringList).allTextContents();

    return { good, bad, total, recurring, recurringDreams };
  }
}
