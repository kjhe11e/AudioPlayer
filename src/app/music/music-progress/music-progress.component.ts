// ./src/app/music/music-progress/music-progress.component.ts

import { Component, Input } from '@angular/core';

@Component ({
  selector: 'music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.css'],
})

export class MusicProgressComponent {
  // played
  @Input() elapsedTime: string;
  // total time
  @Input() totalTime: string;
  // current time (for progress bar)
  @Input() currentTime: number;
}
