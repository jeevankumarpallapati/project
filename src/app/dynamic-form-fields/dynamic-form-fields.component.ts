import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicFormDataModel } from 'models/FormModel';
@Component({
  selector: 'app-dynamic-form-fields',
  templateUrl: './dynamic-form-fields.component.html',
  styleUrls: ['./dynamic-form-fields.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicFormFieldsComponent implements OnInit {
  @Input() formData: DynamicFormDataModel[] = [];
  @Input() parentDataId: String = '';
  @Input() formId: any;
  @Input() data: any;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [];
  masterDataObject: { [key: string]: any } = {};
  constructor() { }
  ngOnInit(): void {
    let jsonString = localStorage.getItem('masterData') || '';
    if (jsonString) this.masterDataObject = JSON.parse(jsonString);
    console.log('masterData: ', this.masterDataObject);
    this.setupFormBasedOnData(this.formData);
    this.model = this.data;
    this.form.valueChanges.subscribe((data) => {
      this.submit();
    });
  }
  setupFormBasedOnData = (data: DynamicFormDataModel[]) => {
    let fieldGroupData: {}[] = [];
    for (let object of data) {
      switch (object.type) {
        case 'input':
          let inputObject = {
            key: object.key,
            type: 'input',
            className: object.class ? object.class : 'col-4',
            defaultValue: object.value,
            templateOptions: {
              label: object.name,
              type: object.subType,
              placeholder: object.placeholder,
              //description: 'Description',
              required: object.required == 0 ? false : true,
            },
          };
          fieldGroupData.push(inputObject);
          break;
        case 'textarea':
          let textareaObject = {
            key: object.key,
            type: 'textarea',
            className: 'col-4',
            defaultValue: object.value,
            templateOptions: {
              label: object.name,
              rows: 4,
              placeholder: object.placeholder,
              //description: 'Description',
              readOnly: object.readOnly,
              disabled: object.disabled,
              required: object.required == 0 ? false : true,
            },
          };
          fieldGroupData.push(textareaObject);
          break;
        case 'radio':
          let radioObject = {
            key: object.key,
            type: 'radio',
            className: object.class ? object.class : 'col-4',
            templateOptions: {
              label: object.name,
              placeholder: object.placeholder,
              description: '',
              required: object.required == 0 ? false : true,
              options: object.options,
            },
          };
          fieldGroupData.push(radioObject);
          break;
        case 'select':
          let selectData: {}[] = [];
          if (this.masterDataObject[object.masterDataKey] || object.options) {
            let data =
              object.options || this.masterDataObject[object.masterDataKey];
            for (const element of data) {
              selectData.push({
                value: element.name,
                label: element.name,
                disabled: false,
              });
            }
          }
          switch (object.subType) {
            case 'multi_select':
              let multiSelectObject = {
                key: object.key,
                type: 'select',
                className: object.class ? object.class : 'col-4',
                defaultValue: object.value,
                templateOptions: {
                  label: object.name,
                  //placeholder: object.placeholder,
                  //description: 'Description',
                  required: object.required == 0 ? false : true,
                  multiple: true,
                  selectAllOption: 'Select All',
                  options: selectData,
                },
              };
              fieldGroupData.push(multiSelectObject);
              break;
            default:
              // single select
              let selectObject = {
                key: object.key,
                type: 'select',
                className: 'col-4',
                defaultValue: object.value,
                templateOptions: {
                  label: object.name,
                  //placeholder: object.placeholder,
                  //description: 'Description',
                  required: object.required == 0 ? false : true,
                  options: object.options,
                },
              };
              fieldGroupData.push(selectObject);
              break;
          }
          break;
        default:
          break;
      }
    }
    let formGroupObject = {
      fieldGroupClassName: 'row',
      fieldGroup: fieldGroupData,
    };
    this.fields.push(formGroupObject);
    this.fields = this.fields;
    console.log('test', this.fields);
  };
  submit() {
    this.eventEmitter.emit({
      formValue: this.form.value,
      parentId: this.parentDataId,
      formId: this.formId,
    });
    if (this.form.valid) {
    }
  }
}