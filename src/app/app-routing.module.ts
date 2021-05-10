import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './api/api.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { CreateGlAccountComponent } from './create-gl-account/create-gl-account.component';
import { CreateGlGroupComponent } from './create-gl-group/create-gl-group.component';
import { CreateGlSubGroupComponent } from './create-gl-sub-group/create-gl-sub-group.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DocumentRangeComponent } from './document-range/document-range.component';
import { DynamicFormFieldsComponent } from './dynamic-form-fields/dynamic-form-fields.component';
import { FormsComponent } from './forms/forms.component';
import { ReAssignTaskComponent } from './re-assign-task/re-assign-task.component';
import { RetailInvoiceComponent } from './retail-invoice/retail-invoice.component';
import { RSKComponent } from './rsk/rsk.component';
import { SaleDeedComponent } from './sale-deed/sale-deed.component';
import { TableComponent } from './table/table.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rsk' },
  { path: 'task', component: TaskComponent },
  { path: 'rsk', component: RSKComponent },
  { path: 'dialog', component: DialogBoxComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: 'assign', component: AssignTaskComponent },
  { path: 're-assign', component: ReAssignTaskComponent },
  { path: 'dynamic', component: DynamicFormFieldsComponent },
  { path: 'sale-deed', component: SaleDeedComponent },
  { path: 'table', component: TableComponent },
  { path: 'create-gl', component: CreateGlAccountComponent },
  { path: 'document-range', component: DocumentRangeComponent },
  { path: 'create-gl-group', component: CreateGlGroupComponent },
  { path: 'retail', component: RetailInvoiceComponent },
  { path: 'create-gl-sub-group', component: CreateGlSubGroupComponent },
  { path: 'API', component: APIComponent },
  { path: '**', redirectTo: 'task' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

