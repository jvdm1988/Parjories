import { TravellocalPage } from './app.po';

describe('travellocal App', () => {
  let page: TravellocalPage;

  beforeEach(() => {
    page = new TravellocalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
