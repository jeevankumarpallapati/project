import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

class NewTask {
  constructor(
    public taskName: string = '',
    public type: string = '',
    public status: string = ''
  ) { }
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  businessName = 'Business name ';
  businessNameFirstLetter = 'B';
  separetorTitle = 'Create Task (Super User)';

  business_type = new FormControl();
  verticals_type = new FormControl();
  branches = new FormControl();
  departments = new FormControl();
  designations = new FormControl();
  employees = new FormControl();
  priority_type = new FormControl();

  businessList: string[] = ['Automobile', 'Jewellry', ''];
  verticalsList: string[] = ['Sales', 'Services', ''];
  branchList: string[] = ['Secunderabad', 'Gachhibowli', ''];
  departmentList: string[] = ['Sales', 'Services', 'Automobiles'];
  designationList: string[] = ['Business-Analyst', 'Trainee', 'Web-Developer', 'Mobile-Developer', 'Full Stack Developer'];
  employeeList: string[] = ['Abhilash', 'Ravinder', 'Swathi', 'Yagnika', 'Sindhu'];
  priorityList: string[] = ['Auto', 'Manual', ''];

  new_task: NewTask[] = [];
  taskModel: NewTask;
  showNew: any;
  submitType: string = 'Save';
  selectedRow: number;
  taskForm: any;
  isSave: any;
  // public isSave = (controlName: string, errorName: string) => {
  //   return this.taskForm.controls[controlName].hasError(errorName);
  // }

  isSubmitted: any;


  constructor(private formBuilder: FormBuilder) {
    this.new_task.push(new NewTask('Labour License Renewal', 'Auto', 'Active'));
    this.new_task.push(new NewTask('Trade License Renewal', 'Manual', 'In-Active'));
    this.new_task.push(new NewTask('PF Payment', 'Auto', 'Active'));
    this.new_task.push(new NewTask('ESI Payment', 'Auto', 'Active'));
    this.new_task.push(new NewTask('Festival Showroom Decaration ', 'Auto', 'Active'));
  }

  ngOnInit(): void {
    this.build();
  }

  build() {
    // this.taskForm = this.formBuilder.group({
    //   business_type: ['', Validators.required],
    //   verticals_type: ['', Validators.required],
    //   taskName: ['', Validators.required],
    //   type: ['', Validators.required],
    //   details: ['', Validators.required]
    // });

    this.taskForm = new FormGroup({
      business_type: new FormControl('', Validators.required),
      verticals_type: new FormControl('', Validators.required),
      createTask: new FormControl('', Validators.required),
      priority_type: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    });
  }


  onSave(taskForm: FormGroup) {
    this.isSubmitted = true;
    if (this.submitType === 'Save') {
      this.new_task.push(this.taskModel);
    } else {
      this.new_task[this.selectedRow].taskName = this.taskModel.taskName;
      this.new_task[this.selectedRow].type = this.taskModel.type;
      this.new_task[this.selectedRow].status = this.taskModel.status;
    }
    this.showNew = false;

    console.log('form: ', this.taskForm.value);
    // if (this.taskForm.invalid) {
    //   return;
    // }
  }
  onNew() {
    this.taskModel = new NewTask();
    this.submitType = 'Save';
    this.showNew = true;
  }


}

