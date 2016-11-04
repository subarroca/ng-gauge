import { Kwng2GaugePage } from './app.po';

describe('kwng2-gauge App', function() {
  let page: Kwng2GaugePage;

  beforeEach(() => {
    page = new Kwng2GaugePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
