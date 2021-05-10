import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  form = new FormGroup({});
  isSubmitted: any;
  value: any;
  // value: any;
  constructor() { }
  ngOnInit(): void {
    this.build();
  }
  build() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      message: new FormControl('', Validators.required)
    });
    //   isControlHasError(controlName: string, validationType: string, formName: string | number): boolean {
    //     const control = this[formName].controls[controlName];
    //     if (!control) {
    //         return false;
    //     }
    //     const result = control.hasError(validationType) && (control.dirty || control.touched);
    //     return result;
    // }
    // enquiryForm() {
    // this.EnquiryEditForm = this.fb.group({
    // 	challanNo: [''],
    // 	challanDate: [new Date(Date.now()).toLocaleDateString()],
    // 	referencenumber: [''],

    // 	firstName: ['', Validators.required],
    // 	lastName: ['', Validators.required],
  }
  submit(form: FormGroup) {
    this.isSubmitted = true;
    console.log('Valid?', form.valid);
    console.log('username', [form.value.username]);
    console.log('mail', form.value.mail);
    console.log('password', form.value.password);
    console.log('message', form.value.message);
    // console.log(this.form);
  }
}
// function isControlHasError(this: any, controlName: any, _string: any, validationType: any, string: any, formName: any, arg5: number) {
//   const control = this[formName].controls[controlName];
//   if (!control) {
//     return false;
//   }
//   const result = control.hasError(validationType) && (control.dirty || control.touched);
//   return result;
// }
