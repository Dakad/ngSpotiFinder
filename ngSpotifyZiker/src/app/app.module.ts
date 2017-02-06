import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routes';
import {SpotifyService } from './spotify.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ArtistDetailsComponent } from './artist/details/artist-details.component';
import { AlbumDetailsComponent } from './album/details/album-details.component';
import { GenreComponent } from './genre/genre.component';
import { PlayerComponent } from './player/player.component';
import { AlbumItemComponent } from './album/item/album-item.component';
import { TrackComponent } from './track/track.component';
import { ArtistItemComponent } from './artist/item/artist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ArtistDetailsComponent,
    AlbumDetailsComponent,
    GenreComponent,
    PlayerComponent,
    AlbumItemComponent,
    TrackComponent,
    ArtistItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
