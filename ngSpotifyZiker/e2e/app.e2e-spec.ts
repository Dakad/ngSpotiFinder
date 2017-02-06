import { NgSpotifyZikerPage } from './app.po';

describe('ng-spotify-ziker App', function() {
  let page: NgSpotifyZikerPage;

  beforeEach(() => {
    page = new NgSpotifyZikerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
