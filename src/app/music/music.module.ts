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
import { ApiService } from './shared/api.service';

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
    MusicDetailsComponent
  ],

  declarations: [
    // declare components
    MusicSearchComponent,
    MusicPlayerComponent,
    MusicDetailsComponent
  ],

  providers: [
    // services
    ApiService,
    MusicService
  ],
})

export class MusicModule { }
