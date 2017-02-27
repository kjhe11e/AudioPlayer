// ./src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { MusicService } from './music/shared/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title;
  tracks: any[] = [];
  backgroundStyle;

  constructor(
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.musicService.getPlaylistTracks().subscribe(tracks => {
      this.tracks = tracks;
      //this.handleRandom();  // TODO: this function not yet created
    });

    // on song end
    this.musicService.audio.onEnded = this.handleEnded.bind(this);

    // on play time update
    this.musicService.audio.onTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  handleRandom() {
    // pick random song
    const randomTrack = this.musicService.randomTrack(this.tracks);

    // play the picked song
    this.musicService.play(randomTrack.stream_url);

    // set title property
    this.title = randomTrack.title;

    // create background based on selected song
    //this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url);
  }

  handleEnded(e) {
    this.handleRandom();
  }

  handleTimeUpdate(e) {
    const elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    //this.position = elapsed / duration;
    //this.elapsed = this.musicService.formatTime(elapsed);
    //this.duration = this.musicService.formatTime(duration);
  }

}
