import { Component, OnInit } from '@angular/core';
import salesDeed from './salesDeed';

@Component({
  selector: 'app-sale-deed',
  templateUrl: './sale-deed.component.html',
  styleUrls: ['./sale-deed.component.css']
})
export class SaleDeedComponent implements OnInit {
  data = salesDeed;
  constructor() { }

  ngOnInit(): void {
  }

}
