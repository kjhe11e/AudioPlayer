// ./src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { MusicService } from './music/shared/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  tracks: any[] = [];

  constructor(
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.musicService.getPlaylistTracks().subscribe(tracks => {
      this.tracks = tracks;
      //this.handleRandom();  // TODO: this function not yet created
    });

    // on song end
    this.musicService.audio.onended = this.handleEnded.bind(this);

    // on play time update
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

}
