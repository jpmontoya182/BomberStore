import { BomberStorePage } from './app.po';

describe('bomber-store App', () => {
  let page: BomberStorePage;

  beforeEach(() => {
    page = new BomberStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
