import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101443253-lab-test2-comp3133';
}
