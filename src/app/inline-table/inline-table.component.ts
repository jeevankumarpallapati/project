import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-table',
  templateUrl: './inline-table.component.html',
  styleUrls: ['./inline-table.component.css']
})
export class InlineTableComponent implements OnInit {
  editUsr: any; oldUsr: any; editdisabled: boolean
  dataSource: any;
  dataListSubs: any;
  userServ: any;
  toastr: any;
  constructor() { }
  editROw(usr: any) {
    console.log(usr)
    this.editUsr = usr && usr.Id ? usr : {};
    this.oldUsr = { ...this.editUsr };
  }
  updateEdit() {
    //updateEdit
    this.editdisabled = true;
    this.userServ.updateUser(this.editUsr)
      .subscribe((data: any) => {
        this.editUsr = {};
        this.editdisabled = false;
        if (data.Data && data.Status == 1) {
          this.oldUsr = {};
          this.toastr.success(data.Message, 'Success!');
        } else {
          this.cancelEdit();
          this.toastr.error(data.Message, 'Error!');
        }
      }, err => {
        this.toastr.error("Please try after some time", 'Error!');
        this.editdisabled = false;
        this.cancelEdit();
      });
  }
  cancelEdit() {
    //cancel
    this.editUsr = {};
    if (this.oldUsr && this.oldUsr.Id) {
      this.dataListSubs = this.dataSource.usersData.pipe(
        distinctUntilChanged()
      ).subscribe((data) => {
        if (data.length <= 0) {
        } else {
          let index = data.findIndex(item => item.Id === this.oldUsr.Id)
          data.splice(index, 1, this.oldUsr)
          this.dataSource.changeDataSource(data);
        }
      })
      this.dataListSubs.unsubscribe();
      console.log(this.oldUsr, 'this.oldUsr', this.dataSource.usersData)
    }
  }
  ngOnInit(): void {
  }

}
function distinctUntilChanged(): any {
  throw new Error('Function not implemented.');
}

