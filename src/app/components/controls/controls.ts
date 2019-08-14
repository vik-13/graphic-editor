import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ge-controls',
  templateUrl: './controls.html',
  styleUrls: ['./controls.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {}
