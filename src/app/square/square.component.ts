import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ArrOfValues, SingleSquare } from '../single-square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  // Single square in the 3x3 grid
  @Input() square: SingleSquare;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cycleContent(): void {
    this.square.index = (this.square.index + 1) % 3;
    this.square.content = ArrOfValues.arr[this.square.index];
    this.clicked.emit();
  }

}
