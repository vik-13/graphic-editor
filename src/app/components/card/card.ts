import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CardPosition } from './card.states';

@Component({
  selector: 'ge-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() title: string = '';

  @Input()
  get defaultPosition() { return this._defaultPosition; }
  set defaultPosition(value: CardPosition) {
    this._defaultPosition = value;
    this.position = value;
  }
  private _defaultPosition: CardPosition = {x: 0, y: 0};

  get position() { return this._position; }
  set position(value: CardPosition) {
    this._position = value;
    this._renderer.setStyle(this._elementRef.nativeElement, 'top', `${value.y}px`);
    this._renderer.setStyle(this._elementRef.nativeElement, 'left', `${value.x}px`);
  }
  private _position: CardPosition = {x: 0, y: 0};

  @Input()
  get fixed() { return this._fixed; }
  set fixed(value: boolean) {
    this._fixed = value;
  }
  private _fixed: boolean = true;

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef) {}
}
