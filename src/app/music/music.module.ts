// third party imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

// PrimeNG autocomplete for search
import { AutoCompleteModule } from 'primeng/primeng';

// custom imports
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { ApiService } from './shared/api.service';
import { MusicService } from './shared/music.service';

@NgModule ({
  imports: [
    // define imports
    FormsModule,
    AutoCompleteModule,
    HttpModule,
    CommonModule
  ],

  exports: [
    // expose components
    MusicSearchComponent,
    MusicPlayerComponent,
    MusicDetailsComponent,
    MusicProgressComponent,
    MusicFooterComponent
  ],

  declarations: [
    // declare components
    MusicSearchComponent,
    MusicPlayerComponent,
    MusicDetailsComponent,
    MusicProgressComponent,
    MusicFooterComponent
  ],

  providers: [
    // services
    ApiService,
    MusicService
  ],
})

export class MusicModule { }
