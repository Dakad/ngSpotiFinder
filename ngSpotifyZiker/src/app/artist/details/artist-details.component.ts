import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../spotify.service';
import { Artist } from '../../dto/artist';
import { Album } from '../../dto/album';
import { Track } from '../../dto/track';



@Component({
  selector: 'app-artist',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  private id: string;
  private artist: Artist;



  constructor(private _spotiServ: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotiServ.findArtistById(id)
          .subscribe(res => this.artist = Artist.extractFromRawData(res));
        this._spotiServ.findAlbumByArtistId(id)
          .subscribe(res => res.items.map((val, i, arr) => {
            this.artist.addAlbum(Album.extractFromRawData(val));
          }));
        this._spotiServ.findTopTracksByArtistId(id)
          .subscribe(res => res.tracks.map((val, i, arr) => {
            this.artist.addTopTrack(Track.extractFromRawData(val));
          }));
      })
  }



}
