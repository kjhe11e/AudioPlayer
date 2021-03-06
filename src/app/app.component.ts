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
  position;
  elapsed;
  duration;
  paused = true;
  tracks: any[] = [];
  backgroundStyle;
  filteredTracks: any[] = [];

  constructor(
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.musicService.getPlaylistTracks().subscribe(tracks => {
      this.tracks = tracks;
      this.handleRandom();
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
    this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url);
  }

  handleEnded(e) {
    this.handleRandom();
  }

  handleTimeUpdate(e) {
    const elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    this.position = elapsed / duration;
    this.elapsed = this.musicService.formatTime(elapsed);
    this.duration = this.musicService.formatTime(duration);
  }

  handleQuery(payload) {
    this.musicService.findTracks(payload).subscribe(tracks => {
      this.filteredTracks = tracks;
    });
  }

  composeBackgroundStyle(url) {
    return {
      width: '100%',
      height: '600px',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)),
        url(${this.musicService.xlArtwork(url)})`
    }
  }

  handlePausePlay() {
    if(this.musicService.audio.paused) {
      this.paused = true;
      this.musicService.audio.play();
    }
    else {
      this.paused = false;
      this.musicService.audio.pause();
    }
  }

  handleStop() {
    this.musicService.audio.pause();
    this.musicService.audio.currentTime = 0;
    this.paused = false;
  }

  handleBackward() {
    let elapsed = this.musicService.audio.currentTime;
    console.log(elapsed);
    if(elapsed >= 5) {
      this.musicService.audio.currentTime = elapsed - 5;
    }
  }

  handleForward() {
    let elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    if(duration - elapsed >= 5) {
      this.musicService.audio.currentTime = elapsed + 5;
    }
  }

}
