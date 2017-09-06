import { RbaiAdminPage } from './app.po';

describe('rbai-admin App', function() {
  let page: RbaiAdminPage;

  beforeEach(() => {
    page = new RbaiAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
