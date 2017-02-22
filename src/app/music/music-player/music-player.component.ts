// ./src/app/music/music-player/music-player.component.ts

import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component ({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})

export class MusicPlayerComponent {
  @Input() paused;  // boolean if paused or playing
  // controls:
  @Output() back = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() stop = new EventEmitter();
}
