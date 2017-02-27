// ./src/app/music/shared/music.service.ts

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class MusicService {
  audio;

  constructor(
    private apiService: ApiService
  ) {
    this.audio = new Audio();
  }

  load(url) {
    this.audio.src = this.apiService.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play();
  }

  getPlaylistTracks() {
    // request playlist via Soundcloud using client id
    return this.apiService.get('https://api/soundcloud.com/playlists/1', true)
      .map(res => res.json())
      .map(data => data.tracks);
  }

  randomTrack(tracks) {
    const trackLength = tracks.length;

    // pick psuedo-random number
    const randomNumber = Math.floor((Math.random() * trackLength) + 1);

    // return random track
    return tracks[randomNumber];
  }

  formatTime(seconds) {
    let minutes:any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }

  findTracks(value) {
    return this.apiService.get('${this.apiService.prepareUrl('https://api.soundcloud.com/tracks')}&q=${value}', false)
      .debounceTime(300)
      .distinctUntilChanged()
      .map(res => res.json())
  }

  xlArtwork(url) {
    return url.replace(/large/, 't500x500');
  }

}
