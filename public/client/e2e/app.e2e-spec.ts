import { RbaiClientPage } from './app.po';

describe('rbai-client App', function() {
  let page: RbaiClientPage;

  beforeEach(() => {
    page = new RbaiClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
