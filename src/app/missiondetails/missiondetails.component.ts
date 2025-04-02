import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  imports: [RouterLink],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  httpClient = inject(HttpClient);
  mission: any;

  constructor(private router: Router) { }

  async ngOnInit() {
    const missionId: String = this.activatedRoute.snapshot.params["id"];

    this.fetchMissionDetails(missionId);
  }

  fetchMissionDetails(missionId: String) {
    this.httpClient.get(`https://api.spacexdata.com/v3/launches/${missionId}`).subscribe((data: any) => {
      this.mission = data;
    });
  }
}
