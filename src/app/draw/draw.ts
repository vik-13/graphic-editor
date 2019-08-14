import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ge-draw',
  templateUrl: './draw.html',
  styleUrls: ['./draw.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawComponent {}
