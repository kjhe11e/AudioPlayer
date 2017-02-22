// third party imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';

// PrimeNG autocomplete for search
import { AutoCompleteModule } from 'primeng/primeng';

// custom imports
import { MusicSearchComponent } from './music-search/music-search.component';


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
    MusicSearchComponent
  ],

  declarations: [
    // declare components
    MusicSearchComponent
  ],

  providers: [
    // services
    ApiService,
    MusicService
  ],
})

export class MusicModule { }
