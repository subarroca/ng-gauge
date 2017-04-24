import { browser, element, by } from 'protractor';

export class Kwng2GaugePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-gauge h1')).getText();
  }
}
