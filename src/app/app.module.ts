import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustamStyleDirective } from './custam-style.directive';
import { TaskComponent } from './task/task.component';
import { RSKComponent } from './rsk/rsk.component';
import { MatCardModule } from '@angular/material/card';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
// import * as _ from "lodash";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { ReAssignTaskComponent } from './re-assign-task/re-assign-task.component';
import { DynamicFormFieldsComponent } from './dynamic-form-fields/dynamic-form-fields.component';
import { SaleDeedComponent } from './sale-deed/sale-deed.component';
import { TableComponent } from './table/table.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { SharedComponent } from './shared/shared.component';
import { CreateGlAccountComponent } from './create-gl-account/create-gl-account.component';
import { DocumentRangeComponent } from './document-range/document-range.component';
import { RetailInvoiceComponent } from './retail-invoice/retail-invoice.component';
import { CreateGlGroupComponent } from './create-gl-group/create-gl-group.component';
import { CreateGlSubGroupComponent } from './create-gl-sub-group/create-gl-sub-group.component';
import { DialogBoxAccountGlAccountComponent } from './dialog-box-account-gl-account/dialog-box-account-gl-account.component';
import { DialogBoxAccountGlSubGroupComponent } from './dialog-box-account-gl-sub-group/dialog-box-account-gl-sub-group.component';
import { APIComponent } from './api/api.component';
// import{ HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
// import { MatTableDataSource } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    RSKComponent,
    CustamStyleDirective,
    DialogBoxComponent,
    FormsComponent,
    CreateTaskComponent,
    AssignTaskComponent,
    ReAssignTaskComponent,
    DynamicFormFieldsComponent,
    SaleDeedComponent,
    TableComponent,
    InlineTableComponent,
    SharedComponent,
    CreateGlAccountComponent,
    DocumentRangeComponent,
    RetailInvoiceComponent,
    CreateGlGroupComponent,
    CreateGlSubGroupComponent,
    DialogBoxAccountGlAccountComponent,
    DialogBoxAccountGlSubGroupComponent,
    APIComponent,

  ],
  // entryComponents: [DialogBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule, MatCardModule, HttpClientModule, ReactiveFormsModule,
  ],
  exports: [
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
