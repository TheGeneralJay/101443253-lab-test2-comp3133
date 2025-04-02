import {Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionfilter',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);

  launchYears: any[] = [];
  selectedFilter: string = "";

  @Output() selectedFilterEvent = new EventEmitter<any>();

  ngOnInit() {
    this.fetchData();
  }

  selectYear(value: string) {
    this.selectedFilterEvent.emit(value);
  }

  clearFilter() {
    location.reload();
  }

  fetchData() {
    this.httpClient.get("https://api.spacexdata.com/v3/launches").subscribe((data: any) => {
      for (let launch in data) {
        // Don't include duplicate years.
        if (!this.launchYears.includes(data[launch].launch_year)) {
          this.launchYears.push(data[launch].launch_year);
        }
      }
    });
  }
}
