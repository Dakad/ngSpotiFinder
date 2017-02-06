import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ArtistDetailsComponent } from './artist/details/artist-details.component';
import { AlbumDetailsComponent } from './album/details/album-details.component';
import { GenreComponent } from './genre/genre.component';


export const routing: ModuleWithProviders = RouterModule.forRoot([
    { path: '', component: SearchComponent },
    { path: 'search/:str', component: SearchComponent },
    { path: 'artist/:id', component: ArtistDetailsComponent },
    { path: 'album/:id', component: AlbumDetailsComponent },
    { path: 'genre/:id', component: GenreComponent },
]);