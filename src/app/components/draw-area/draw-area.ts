import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Position } from '../../app.states';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ge-draw-area',
  templateUrl: './draw-area.html',
  styleUrls: ['./draw-area.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawAreaComponent implements AfterContentInit, OnDestroy {

  cursorPosition: Position = {x: 0, y: 0};

  get position() { return this._position; }
  set position(value: Position) {
    this._position = value;
    this._renderer.setStyle(this.area.nativeElement, 'top', `${value.y}px`);
    this._renderer.setStyle(this.area.nativeElement, 'left', `${value.x}px`);
  }
  private _position: Position = {x: 0, y: 0};

  @ViewChild('area', {static: true})
  get area() { return this._area; }
  set area(value: ElementRef) {
    this._area = value;
  }
  private _area: ElementRef;

  _resizeSubscription: Subscription = fromEvent(window, 'resize').pipe(
    debounceTime(30)
  ).subscribe(() => {
    this.updatePosition();
  });

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

  updatePosition() {
    this.position = {
      x: (this._elementRef.nativeElement.offsetWidth - this.area.nativeElement.offsetWidth) / 2,
      y: (this._elementRef.nativeElement.offsetHeight - this.area.nativeElement.offsetHeight) / 2
    };
  }

  mouseDown(event: MouseEvent) {
    this.cursorPosition = {
      x: event.offsetX,
      y: event.offsetY
    };
  }

  mouseMove(event: MouseEvent) {
    this.cursorPosition = {
      x: event.offsetX,
      y: event.offsetY
    };
  }

  mouseUp(event: MouseEvent) {
    this.cursorPosition = {
      x: event.offsetX,
      y: event.offsetY
    };
  }

  ngAfterContentInit() {
    this.updatePosition();
  }

  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
}
