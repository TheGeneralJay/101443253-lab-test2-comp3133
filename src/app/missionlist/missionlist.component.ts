import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  imports: [CommonModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  httpClient = inject(HttpClient);
  launchList: any[] = [];

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get("https://api.spacexdata.com/v3/launches").subscribe((data: any) => {
      this.launchList = data;
    });
  }
}
