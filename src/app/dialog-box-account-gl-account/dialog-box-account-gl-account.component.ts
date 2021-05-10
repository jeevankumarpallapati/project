import { OnInit } from '@angular/core';
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  glgroupname: string;
  sno: number;
  acc_type: string;
  glheads: string;
}
@Component({
  selector: 'app-dialog-box-account-gl-account',
  templateUrl: './dialog-box-account-gl-account.component.html',
  styleUrls: ['./dialog-box-account-gl-account.component.css']
})
export class DialogBoxAccountGlAccountComponent implements OnInit {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxAccountGlAccountComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log("tableRowData: ", data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
