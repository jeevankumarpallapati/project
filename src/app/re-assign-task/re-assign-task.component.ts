// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-re-assign-task',
//   templateUrl: './re-assign-task.component.html',
//   styleUrls: ['./re-assign-task.component.css']
// })
// export class ReAssignTaskComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }





import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-re-assign-task',
  templateUrl: './re-assign-task.component.html',
  styleUrls: ['./re-assign-task.component.css']
})
export class ReAssignTaskComponent implements OnInit {
  @Input() public childPosts: any[] = [];
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

  constructor() { }

  ngOnInit(): void {
  }

  getNewTask() { }

  getReset() { }

  getSubmit() { }

}
