import { Component, Input ,OnInit } from '@angular/core';


import {Track} from '../dto/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @Input() private track : Track;

  constructor() { }

  ngOnInit() {
  }

}
