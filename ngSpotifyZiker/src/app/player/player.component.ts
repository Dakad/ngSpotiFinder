import { Component, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';

import { Album } from '../dto/album';
import { Track } from '../dto/track';
import { DjMixer } from './djMixer';

export enum PlayerType { }

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {
  private player: any = {
    audio: undefined,
    isPlaying: false,
    isPaused: true,
    isLooped: true,
    current: Track,
    progress: 0,
  };

  private dj: DjMixer;

  @Input() mode:string;

  @Input() playlist: Track[];

  @Input() albums: Album[];


  constructor() {
    this.player.audio = document.createElement('audio');
    this.player.audio.id = 'ziker'
    this.player.audio.volume = 1;
  }

  ngOnInit() {
    const audio = this.player.audio;
    this.player.audio.addEventListener('ended', () => {
      this.next();
    });

    audio.addEventListener('timeupdate', () => {
      this.player.progress = ((100 / audio.duration) * audio.currentTime);
      console.log(audio.duration);
      console.log(audio.currentTime);
      console.log(this.player.progress);
    });

  }

  ngOnDestroy() {
    this.player.audio.pause();
    this.player.audio.remove();
  }


  play(trackId) {
    if (!trackId) {
      if (this.playlist.length == 0) {
        return;
      }
      if (this.player.isPlaying && this.player.isPaused) {
        this.player.isPaused = false;
        return this.player.audio.play();
      }
      this.player.current = this.playlist[0];
    } else {
      this.player.current = this.playlist.find(t => t.id === trackId);
    }

    if (!this.player.current) {
      return alert('Unknown track !');
    }

    this._launchPlay();
  }

  private _launchPlay() {
    this.player.audio.src = this.player.current.src;
    this.player.audio.load();
    this.player.audio.play();
    this.player.isPlaying = true;
    this.player.isPaused = false;
  }


  pause() {
    if (this.player.isPlaying) {
      this.player.audio.pause();
      this.player.isPlaying = true;
      this.player.isPaused = true;
    }
  }


  next() {
    if (!this.player.isPlaying) {
      return;
    }
    let next = this.playlist.indexOf(this.player.current);
    if (++next == this.playlist.length) {
      next = 0;
    }
    this.player.current = this.playlist[next];

    if (!this.player.isLooped) {
      return alert('Done ! All tracks in this album have been listened ')
    } else {
      this._launchPlay();
    }
  }


  previous() {
    if (!this.player.isPlaying) {
      return;
    }
    let prev = this.playlist.indexOf(this.player.current);
    if (--prev < 0) {
      prev = this.playlist.length - 1;
    }
    this.player.current = this.playlist[prev];
    this._launchPlay();
  }


  displayProgess(){
    return this.player.progress +'%';
  }


  controlPlayer(e: any) {
    console.log(e.keyCode);
  }

}
