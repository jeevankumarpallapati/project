import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'lib-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  businessName = 'Business name ';
  businessNameFirstLetter = 'B';
  separetorTitle = 'Assign Task';

  tasks = new FormControl();
  locations = new FormControl();
  branches = new FormControl();
  departments = new FormControl();
  designations = new FormControl();
  employees = new FormControl();
  taskList: string[] = ['Incidental', 'Routine'];
  locationList: string[] = ['Hyderabad', 'Khammam'];
  branchList: string[] = ['Secunderabad', 'Gachhibowli'];
  departmentList: string[] = ['Sales', 'Services', 'Automobiles'];
  designationList: string[] = ['Business-Analyst', 'Trainee', 'Web-Developer', 'Mobile-Developer', 'Full Stack Developer'];
  employeeList: string[] = ['Abhilash', 'Ravinder', 'Swathi', 'Yagnika', 'Sindhu'];
  Data: any;

  constructor(public _service: MyServiceService) { }

  ngOnInit(): void {

    this.getData();
    this._service.sampleSubject.subscribe((data) => {
      alert('message received' + data);
    })
  }

  getData() {
    this._service.getData().subscribe((result: any) => {
      this.Data = result;
      console.log("INFO", this.Data);

    })
  }

  getNewTask() { }

  getReset() { }

  getSubmit(event) {
    // this.childMessage = event;
  }
}
