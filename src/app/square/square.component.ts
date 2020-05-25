import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  // Single square in the 3x3 grid
  arrOfValues: string[] = ['', 'x', 'o'];
  currNum: number;
  content: string;

  constructor() { }

  ngOnInit(): void {
    this.currNum = 0;
    this.content = this.arrOfValues[this.currNum];
  }

  cycleContent(): void {
    this.currNum = (this.currNum + 1) % 3;
    this.content = this.arrOfValues[this.currNum];
  }

}
