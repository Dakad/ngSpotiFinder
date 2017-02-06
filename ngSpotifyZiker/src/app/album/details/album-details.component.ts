import { Component, OnInit , Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../../dto/album';
import { Track } from '../../dto/track';
import { SpotifyService } from '../../spotify.service';

import { PlayerComponent } from '../../player/player.component';


@Component({
  selector: 'app-album',
  templateUrl: './album-details.component.html',
  styleUrls: ['../album.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  private currentAlbums: Album[];
  private tracks: Track[];

  constructor(private _spotiServ: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const _self = this;
    this._route.params.map(param => param['id'])
      .subscribe((id) => {
        this._spotiServ.findAlbumsById(id)
          .subscribe((res) => {
            this.currentAlbums = res;
            this.tracks = res.tracks.items.map((val,i,res) =>{
              return Track.extractFromRawData(val);
            });
          });
      });
  }



}
