import { Component, Input, OnInit } from '@angular/core';

import {Album} from '../../dto/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['../album.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input() private album: Album;

  constructor() { }

  ngOnInit() {
  }

}
