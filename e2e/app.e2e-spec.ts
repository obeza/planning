import { PlanningPage } from './app.po';

describe('planning App', function() {
  let page: PlanningPage;

  beforeEach(() => {
    page = new PlanningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
