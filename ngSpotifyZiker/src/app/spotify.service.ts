import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private spotfiyURl: string = 'https://api.spotify.com/v1';
  private searchUrl: string = this.spotfiyURl + '/search?&offset=0&limit=15';
  // private artistUrl: string = this.spotfiyURl + 'artist';


  constructor(private _http: Http) { }


  searchMuzik(str:string,type='artist'){
    console.log(this.searchUrl);
    return this._http.get(`${this.searchUrl}&q=${str.trim()}&type=${type.trim()}`)
          .map(res => res.json());
  }

  findArtistById(id:string){
    // console.log(this.artistUrl);
    return this._http.get(`${this.spotfiyURl}/artists/${id.trim()}`)
          .map(res => res.json());
  }


  findAlbumByArtistId(id:string){
    return this._http.get(`${this.spotfiyURl}/artists/${id.trim()}/albums`)
          .map(res => res.json());
  }


  findAlbumsById(id:string){
    return this._http.get(`${this.spotfiyURl}/albums/${id.trim()}`)
          .map(res => res.json());
  }

  findTopTracksByArtistId(id){
    return this._http.get(`${this.spotfiyURl}/artists/${id.trim()}/top-tracks?country=GB`)
          .map(res => res.json());
  }


}
