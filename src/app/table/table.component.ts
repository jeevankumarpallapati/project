import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'weight', 'name', 'symbol', 'add'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }
  actionForAdd = () => {

    let newObject: PeriodicElement = {
      position: this.dataSource.data.length + 1,
      name: "Lithium" + " " + this.dataSource.data.length + 1,
      weight: 0,
      symbol: "006",
    };
    this.dataSource.data.push(newObject);
    this.dataSource.data = this.dataSource.data;
  };

  actionForRemove = (index: number) => {
    console.log('index: ', index);
    // splice(start, deleteCount)
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }
}
