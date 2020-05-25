import { Component, OnInit } from '@angular/core';
import { ArrOfValues, SingleSquare } from '../single-square';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  squares: SingleSquare[] = [];
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.restart();
  }

  restart(): void {
    this.squares = this.genEmptyGrid();
    this.winner = '';
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

  checkWinner(): void {
    // Horizontal
    for (let i = 0; i <= 6; i += 3) {
      if (this.squares[i].index === this.squares[i + 1].index
        && this.squares[i + 1].index === this.squares[i + 2].index
        && this.squares[i].index === this.squares[i + 2].index
        && this.squares[i].index !== 0) {
        // Winner found!
        this.winner = this.squares[i].content;
        return;
      }
    }
    // Vertical
    for (let i = 0; i < 3; i++) {
      if (this.squares[i].index === this.squares[i + 3].index
        && this.squares[i + 3].index === this.squares[i + 6].index
        && this.squares[i].index === this.squares[i + 6].index
        && this.squares[i].index !== 0) {
        // Winner found!
        this.winner = this.squares[i].content;
        return;
      }
    }
    // Diagonal
    if (this.squares[0].index === this.squares[4].index
      && this.squares[4].index === this.squares[8].index
      && this.squares[0].index === this.squares[8].index
      && this.squares[0].index !== 0) {
      // Winner found!
      this.winner = this.squares[0].content;
      return;
    }
    if (this.squares[2].index === this.squares[4].index
      && this.squares[4].index === this.squares[6].index
      && this.squares[2].index === this.squares[6].index
      && this.squares[2].index !== 0) {
      // Winner found!
      this.winner = this.squares[2].content;
      return;
    }
    // No winner found
    this.winner = '';
  }

}
