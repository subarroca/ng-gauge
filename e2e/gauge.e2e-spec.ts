import { Kwng2GaugePage } from './gauge.po';

describe('kwng2-gauge App', function() {
  let page: Kwng2GaugePage;

  beforeEach(() => {
    page = new Kwng2GaugePage();
  });

  it('should display message saying gauge works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gauge works!');
  });
});
