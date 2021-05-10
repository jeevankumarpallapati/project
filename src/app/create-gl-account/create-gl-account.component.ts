import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxAccountGlAccountComponent } from '../dialog-box-account-gl-account/dialog-box-account-gl-account.component';


export interface PeriodicElement {
  glaccountname: string;
  sno: number;
  glgroupname: string;
  glsubgroupname: string;
  vendor: string;
  Status: string;
  action: string;

}

@Component({
  selector: 'app-create-gl-account',
  templateUrl: './create-gl-account.component.html',
  styleUrls: ['./create-gl-account.component.css']
})
export class CreateGlAccountComponent implements OnInit {

  businessName = 'Business name ';
  businessNameFirstLetter = 'B';
  separetorTitle = 'Create GL Account';
  separetorTitleList = 'GL Account List';

  glAccountList: string[] = ['CGST - RCM Payable', 'Tax Payable Professional(1994)', 'Bank Account'];
  groupList: string[] = ['Trade Payables', 'Electricity Charges', 'Software License'];
  subGroupList: string[] = ['TDS Payable', 'Service Tax Payable', 'Bank Account'];

  assetClassForm: any;
  glaccountname: any;
  glgroupname: any;
  glsubgroupname: any;
  vendor: any;

  isShown: boolean = false;

  items: Array<any> = [];
  newItem: any = {};

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.assetClassForm = this.formBuilder.group({
      gl_account_name: ['', Validators.required],
      gl_group_name: ['', Validators.required],
      gl_sub_group_name: ['', Validators.required],
      vendor_options: []
    });

    let jsonData = JSON.parse(localStorage.getItem('CreateGlAccount'));
    if (jsonData) {
      this.glaccountname = jsonData.glaccountname || [];
      this.glgroupname = jsonData.glgroupname || [];
      this.glsubgroupname = jsonData.glsubgroupname || [];

    }
  }

  openDialog(action, obj) {
    console.log('obj: ', obj);
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxAccountGlAccountComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      }
      else if (result.event == 'Update') {
        this.updateRowData(result.data);
      }
    });
  }
  addRowData(data: any) {
    throw new Error('Method not implemented.');
  }
  updateRowData(row_obj) {
    for (let i = 0; i < this.items.length; i++) {
      let obj = this.items[i];
      if (obj.sno == row_obj.sno) {
        obj.glaccountname = row_obj.glaccountname;
        obj.glgroupname = row_obj.glgroupname;
        obj.glsubgroupname = row_obj.glsubgroupname;
        obj.vendor = row_obj.vendor;

        this.items[i] = obj;
        break;
      }
    }
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  actionForResetButton() { }

  getSubmitButton() {

    const data = {
      glaccountname: this.glaccountname,
      glgroupname: this.glgroupname,
      glsubgroupname: this.glsubgroupname
    }
    localStorage.setItem('CreateGlAccount', JSON.stringify(data));

    if (this.assetClassForm.invalid) {
      return;
    }

    let newObj = this.newItem;
    newObj.sno = this.items.length + 1;
    this.items.push(newObj);
    console.log(this.items);
    this.newItem = {};

    this.isShown = !this.isShown;
  }

  actionForSubmitButton() { }

}
