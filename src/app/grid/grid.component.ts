import { Component, OnInit } from '@angular/core';
import { SingleSquare } from '../single-square';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  squares: SingleSquare[] = [];

  constructor() { }

  ngOnInit(): void {
    this.restart();
  }

  restart(): void {
    this.squares = this.genEmptyGrid();
  }

  genEmptyGrid(): SingleSquare[] {
    let tempArr: SingleSquare[] = [];
    for (let i: number = 0; i < 9; i++)
    {
      tempArr.push({
        index: 0,
        content: ''
      });
    }
    return tempArr;
  }

}
