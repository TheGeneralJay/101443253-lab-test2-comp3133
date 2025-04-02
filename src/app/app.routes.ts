import { Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

export const routes: Routes = [
  {path: "", redirectTo: "missionlist", pathMatch: "full"},
  {path: "missionlist", component: MissionlistComponent},
  {path: "missiondetails/:id", component: MissiondetailsComponent}
];
