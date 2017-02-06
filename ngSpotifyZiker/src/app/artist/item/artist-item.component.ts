import { Component, Input , OnInit } from '@angular/core';

import {Artist} from '../../dto/artist';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {
  
  @Input() artist: Artist;


  constructor() { }

  ngOnInit() {
  }

}
