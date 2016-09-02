import { MytunesPage } from './app.po';

describe('mytunes App', function() {
  let page: MytunesPage;

  beforeEach(() => {
    page = new MytunesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
