export interface DynamicFormDataModel {
    id: number;
    key: String;
    type: String;
    subType: String;
    name: String;
    placeholder: String;
    required: Number;
    value: String;
    masterDataKey: string;
    options?: any;
    class?: string;
    readOnly?: boolean,
    disabled?: boolean
}