import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxAccountGlSubGroupComponent } from '../dialog-box-account-gl-sub-group/dialog-box-account-gl-sub-group.component';

@Component({
  selector: 'app-create-gl-sub-group',
  templateUrl: './create-gl-sub-group.component.html',
  styleUrls: ['./create-gl-sub-group.component.css']
})
export class CreateGlSubGroupComponent implements OnInit {

  businessName = 'Business name ';
  businessNameFirstLetter = 'B';
  separetorTitle = 'Create GL Sub Group';
  separetorTitleList = 'GL Sub Group List';

  subGroupList: string[] = ['TDS Payable', 'Service Tax Payable', 'Bank Account'];
  groupList: string[] = ['Statutory Dues to Govt.', 'Statutory Dues to Govt.', 'Cash and Cash Equivalents'];

  assetClassForm: any;
  glgroupname: any;
  glsubgroupname: any;

  isShown: boolean = false;

  items: Array<any> = [];
  newItem: any = {};


  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.assetClassForm = this.formBuilder.group({
      gl_group_name: ['', Validators.required],
      gl_sub_group_name: ['', Validators.required]
    });

    let jsonData = JSON.parse(localStorage.getItem('CreateGLSubGroup'));
    if (jsonData) {
      this.glgroupname = jsonData.glgroupname || [];
      this.glsubgroupname = jsonData.glsubgroupname || [];

    }
  }


  openDialog(action, obj) {
    console.log('obj: ', obj);
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxAccountGlSubGroupComponent, {
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
        obj.glsubgroupname = row_obj.glsubgroupname;
        obj.glgroupname = row_obj.glgroupname;

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
      glgroupname: this.glgroupname,
      glsubgroupname: this.glsubgroupname
    }
    localStorage.setItem('CreateGLSubGroup', JSON.stringify(data));

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
