// ./src/app/music/shared/api.service.ts

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  clientId = '[CLIENT_ID]'

  constructor(
    private http: Http
  ) {}

  get(url, attachClientId?) {
    // attach client id if 'attachToken' is true.
    let u;
    attachClientId ? u = this.prepareUrl(url) : u = url;

    // return observable for HTTP GET request
    return this.http.get(u);
  }

  prepareUrl(url) {
    // attach client id to stream url
    return '${url}?client_id=${this.clientId}'
  }
}
