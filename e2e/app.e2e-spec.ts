import { NgGuiAnimeSamplePage } from './app.po';

describe('ng-gui-anime-sample App', () => {
  let page: NgGuiAnimeSamplePage;

  beforeEach(() => {
    page = new NgGuiAnimeSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
