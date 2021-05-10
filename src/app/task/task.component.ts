
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
// import { DialogBoxComponent } from './dialob-box/';
import { MyServiceService } from '../my-service.service';
import { SharedComponent } from '../shared/shared.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // public name = "jeevan";

  public mychoice = "two";
  // public first = "";


  users = [
    "Automate",
    "Angular",
    "ngClass"
  ];

  public Data: any;
  childMessage: any;
  @ViewChild('shared') share: SharedComponent;
  myService: any;

  // constructor(public myService:MyServiceService) { }
  // constructor(public dialog: MatDialog, public _service: MyServiceService) { }


  constructor(public _service: MyServiceService) { }
  ngOnInit() {
    this.getData();
    this.myService.sampleSubject.subscribe((data) => {
      alert('message received' + data);
    })
  }

  getData() {
    this._service.getData().subscribe((result: any) => {
      this.Data = result;
      console.log("INFO", this.Data);

    })
  }
  // getData() {
  //   this._service.getData().subscribe(result => this.Data = result)
  //   console.log("result", this.Data);
  // }
  // onClick() {
  //   prompt(this.mychoice)

  // }
  // openDialog() {
  //   this.dialog.open(DialogBoxComponent);

  // }

  displayMessageFromChild(event) {
    this.childMessage = event;
  }



}




