import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from './shared/launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  httpClient = inject(HttpClient);
  launchList: Launch[] = [];

  fetchData(): any {
    this.httpClient.get("https://api.spacexdata.com/v3/launches").subscribe((data: any) => {
      this.launchList = data;
    });

    return this.launchList;
  }
}
