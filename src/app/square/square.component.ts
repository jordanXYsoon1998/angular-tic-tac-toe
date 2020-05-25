import { Component, OnInit, Input } from '@angular/core';
import { SingleSquare } from '../single-square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  // Single square in the 3x3 grid
  arrOfValues: string[] = ['', 'x', 'o'];
  square: SingleSquare;

  constructor() { }

  ngOnInit(): void {
    this.square = {
      index: 0,
      content: ''
    };
  }

  cycleContent(): void {
    this.square.index = (this.square.index + 1) % 3;
    this.square.content = this.arrOfValues[this.square.index];
  }

}
