import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  // Single square in the 3x3 grid
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
