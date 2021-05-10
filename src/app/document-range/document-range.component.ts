import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  ModuleName: string;
  position: string;
  SubModuleName: string;
  StartRange: string;
  EndRange: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '1', ModuleName: 'Sales', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '', ModuleName: '', SubModuleName: 'Pre Enquiry', StartRange: 'S523700 /PENQ/21/000001', EndRange: 'S523700 /PENQ/21/999999' },
  { position: '', ModuleName: '', SubModuleName: 'Enquiry', StartRange: '', EndRange: '' },
  { position: '2', ModuleName: 'Service', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '', ModuleName: 'SMR Process', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '', ModuleName: 'Warranty', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '3', ModuleName: 'HRMS', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '', ModuleName: '', SubModuleName: 'Recruitment', StartRange: '', EndRange: '' },
  { position: '', ModuleName: '', SubModuleName: 'Claim Management', StartRange: '', EndRange: '' },
  { position: '4', ModuleName: 'Accounts', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '', ModuleName: '', SubModuleName: 'Accounts Payable', StartRange: '', EndRange: '' },
  { position: '', ModuleName: '', SubModuleName: 'Accounts Receiveble', StartRange: '', EndRange: '' },
  { position: '5', ModuleName: 'Inventory', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '', ModuleName: '', SubModuleName: '', StartRange: '', EndRange: '' },
  { position: '6', ModuleName: 'Order ', SubModuleName: '', StartRange: '', EndRange: '' },


];
@Component({
  selector: 'app-document-range',
  templateUrl: './document-range.component.html',
  styleUrls: ['./document-range.component.css']
})
export class DocumentRangeComponent implements OnInit {
  Organization: String[] = [
    'Organization Vertical 1', 'Organization Vertical 2', 'Organization Vertical 3', 'Business Unit 1', 'Business Unit 2', 'All'
  ];
  displayedColumns: string[] = ['position', 'ModuleName', 'SubModuleName', 'StartRange', 'EndRange'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
