import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface PeriodicElement {
  glgroupname: string;
  sno: number;
  acc_type: string;
  glheads: string;
  VisibleToVendor: string;
  Status: string;
  action: string;

}
@Component({
  selector: 'app-create-gl-group',
  templateUrl: './create-gl-group.component.html',
  styleUrls: ['./create-gl-group.component.css']
})
export class CreateGlGroupComponent implements OnInit {

  businessName = 'Business name ';
  businessNameFirstLetter = 'B';
  separetorTitle = 'Create GL Group';
  separetorTitleList = 'GL Group List';

  organizationList: string[] = ['Organization Vertical 1', 'Organization Vertical 2', 'Organization Vertical 3', 'Business Unit 1', 'Business Unit 2', 'All'];
  accountList: string[] = ['Expenditure', 'Income', 'Assets', 'Liability'];
  glHeadList: string[] = ['Tangible', 'In Tangible'];
  groupList: string[] = ['Trade Payables', 'Electricity Charges', 'Software License'];

  assetClassForm: any;
  organization: any;
  glgroupname: any;
  acc_type: any;
  glheads: any;
  status: any;


  isShown: boolean = false;

  items: Array<any> = [];
  newItem: any = {};
  options = [
    { name: "Please Select...", price: 0 },
    { name: "apples", price: 1.19 },
    { name: "peaches", price: 1.39 },
    { name: "pears", price: 1.69 },
    { name: "plums", price: 1.59 }
  ];

  // displayedColumns: string[] = ['sno', 'glgroupname', 'acc_type', 'glheads', 'VisibleToVendor', 'status', 'action'];
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }
  openDialog(action, obj) {
    console.log('obj: ', obj);
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
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
        obj.glgroupname = row_obj.glgroupname;
        obj.acc_type = row_obj.acc_type;
        obj.glheads = row_obj.glheads;
        this.items[i] = obj;
        break;
      }
    }
  }

  ngOnInit(): void {
    this.assetClassForm = this.formBuilder.group({
      select_org: ['', Validators.required],
      gl_group_name: ['', Validators.required],
      account_type: ['', Validators.required],
      gl_heads: ['', Validators.required]
    });

    let jsonData = JSON.parse(localStorage.getItem('CreateGLGroup'));
    if (jsonData) {
      this.organization = jsonData.organization || [];
      this.glgroupname = jsonData.glgroupname || [];
      this.acc_type = jsonData.acc_type || [];
      this.glheads = jsonData.glheads || [];

    }
  }

  // addItems() {
  //   this.items.push(this.newItem);
  //   console.log(this.items);
  //   this.newItem = {};
  // }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  actionForResetButton() { }

  getSubmitButton() {

    const data = {
      organization: this.organization,
      glgroupname: this.glgroupname,
      acc_type: this.acc_type,
      glheads: this.glheads
    }
    localStorage.setItem('CreateGLGroup', JSON.stringify(data));

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

}


