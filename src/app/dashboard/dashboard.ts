import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ge-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {}
