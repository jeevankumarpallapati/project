export default [
    {
        "id": 1,
        "key": "text",
        "type": "input",
        "subType": "text",
        "name": "Enter location",
        "class": "col-md-6",
        "placeholder": "testl",
        "required": 1,
        "value": "",
        "masterDataKey": "faciliyTypeList",
        "label": "text",
    },

    {
        "id": 2,
        "key": "text",
        "type": "input",
        "subType": "text",
        "name": " Enter Landmark",
        "class": "display-inline",
        "placeholder": "qwerty",
        "required": 1,
        "value": "",
        "masterDataKey": "",
        "label": "Enter Landmark",

    },
    {
        "id": 3,
        "key": "facilityType",
        "type": "select",
        "subType": "select",
        "name": "Type of usage",
        "class": "col-md-6",
        "placeholder": "Lease",
        "required": 1,
        "value": "",
        "masterDataKey": "faciliyTypeList",
        "options": [
            { value: 1, label: 'Showroom' },
        ],
        "label": "Type of usage",
    },
    {
        "id": 4,
        "key": "comments",
        "type": "textarea",
        "subType": "textarea",
        "name": "Total area",
        "placeholder": "100",
        "required": 1,
        "value": "",
        "masterDataKey": "",
        "label": "Total area",
    },
    {
        "id": 5,
        "key": "text",
        "type": "input",
        "subType": "text",
        "name": "Area cover",
        "placeholder": "50",
        "required": 1,
        "value": "",
        "masterDataKey": "",
        "label": "Area cover"

    },
    {
        "id": 6,
        "key": "text",
        "type": "input",
        "subType": "text",
        "name": "Area open",
        "placeholder": "50",
        "required": 1,
        "value": "",
        "masterDataKey": "",
        "label": "Area open"

    }

];