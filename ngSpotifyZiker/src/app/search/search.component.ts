import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../spotify.service';
import { Artist } from '../dto/artist';
import { Album } from '../dto/album';
import { Track } from '../dto/track';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  private search = {
    query: <string>'',
    type: <string>'artist',
    result: [],
  };


  constructor(private _spotiServ: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const _self = this;
    this._route.params
      .map(params => params['str'])
      .subscribe((str) => _self.searchMuzik(str))
  }


  searchMuzik(id: any = '') {
    if (!this.search.query) {
      return;
    }
    console.log(this.search.type);
    this._spotiServ.searchMuzik(this.search.query.trim(), this.search.type)
      .subscribe(res => {
        const typeRes = res[this.search.type + 's'].items;
        this.search.result = typeRes.map((val, i, items): any => {
          switch (this.search.type) {
            case 'artist':
              return Artist.extractFromRawData(val);
            case 'album':
              return Album.extractFromRawData(val);
            case 'track':
              return Track.extractFromRawData(val);
          }
        });
      });

  }



}