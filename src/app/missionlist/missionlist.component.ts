import { Component, inject, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { Router, RouterLink } from '@angular/router';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-missionlist',
  imports: [CommonModule,  MissionfilterComponent, RouterLink],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
@Injectable({providedIn: 'root'})
export class MissionlistComponent {
  httpClient = inject(HttpClient);
  launchesService = inject(LaunchesService);
  launchList: any[] = [];
  filter: any;

  constructor(private router: Router) {
    this.launchList = this.launchesService.fetchData();
  }

  filterYear(selectedFilter: any) {
    this.filter = selectedFilter;

    this.httpClient.get(`https://api.spacexdata.com/v3/launches?launch_year=${this.filter}`).subscribe((data: any) => {
      this.launchList = data;
    });
  }
}
