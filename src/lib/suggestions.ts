import * as monaco from 'monaco-editor'


export const suggestions = [
    {
        label: 'Async Block',
        kind: monaco.languages.CompletionItemKind.Snippet,
        documentation: 'Add an async block',
        insertText: [
            '(async () => {',
            '\t',
            '})()'].join('\n')
    },
    {
        documentation: "JSON Data Date",
        label: "jf_data_date",
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            "\"${1:Name}\": {",
            "    \"type\": \"string\",",
            "    \"format\": \"date\",",
            "    \"description\":\"${2:Description}\"",
            "}"
        ].join('\n')
    },
    {
        documentation: "JSON Data String",
        label: "jf_data_string",
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
                "\"${1:Name}\": {",
                "    \"type\": \"string\",",
                "    \"description\":\"${2:Description}\"",
                "}"
            ].join('\n')
    }
]
/*






	"JSON Data Start":{
		"prefix":"jf_data_start",
		"body":[
		"{",
    	"    \"type\": \"object\",",
    	"    \"properties\": {",
		"        ${1:Props}",
    	"    }",
		"}"
		]
	},

	"JSON Data Validation":{
		"prefix": "jf_data_validation",
		"body": [
			"\"${1:Name}\": {",
    		"    \"type\": \"string\",",
			"    \"description\":\"${2:Description}\",",
			"    \"pattern\":\"${3:RegularExpression}\"",
    		"}"
		]
	},

	"JSON Data Enumeration":{
		"prefix": "jf_data_enumeration",
		"body":[
			"\"${1:Name}\": {",
    		"    \"type\": \"string\",",
			"    \"description\":\"${2:Description}\",",
			"    \"enum\":[${3:Enumerations}]",
    		"}"

		]
	},

	"JSON UI Control":{
		"prefix": "jf_ui_control",
		"body":[
			"{",
			"    \"type\":\"Control\",",
			"    \"scope\":\"#/properties/${1:Scope}\"",
			"}"
		]
	},

	"JSON UI Control with Label":{
		"prefix": "jf_ui_control_label",
		"body":[
			"{",
			"    \"type\":\"Control\",",
			"    \"scope\":\"#/properties/${1:Scope}\"",
			"    \"label\":\"${2:Scope}\"",
			"}"
		]
	},

	"JSON UI Radio":{
		"prefix": "jf_ui_radio",
		"body":[
			"{",
			"    \"type\":\"Control\",",
			"    \"scope\":\"#/properties/${1:Scope}\",",
			"    \"options\":{",
			"        \"type\": \"radio\"",
			"    }",
			"}"
		]
	},

	"JSON UI Horizontal Layout":{
		"prefix": "jf_ui_horizontal",
		"body":[
			"{",
			"    \"type\":\"HorizontalLayout\",",
			"    \"elements\":[${1:Elements} ],",
			"}"
		]
	},

	"JSON UI Vertical Layout":{
		"prefix": "jf_ui_vertical",
		"body":[
			"{",
			"    \"type\":\"VerticalLayout\",",
			"    \"elements\":[ ${1:Elements} ],",
			"}"
		]
	},


	"JSON UI Array":{
		"prefix": "jf_data_array",
		"body": [
			"    \"${1:Name}\": {",
			"      \"type\": \"array\",",
			"      \"items\": {",
			"        \"type\": \"object\",",
			"        \"properties\": {",
			"              ${2:Props}",
			"          }",
			"        }",
			"      }",
			"    }"
		]
	},


	"JSON UI Stepper": {
		"prefix": "jf_stepper_ui",
		"body": [
			"{",
			"  \"type\": \"VerticalLayout\",",
			"  \"elements\": [",
			"    {",
			"      \"type\": \"Categorization\",",
			"      \"elements\": [",
			"        {",
			"          \"type\": \"Category\",",
			"          \"label\": \"${1:FirstCategoryName}\",",
			"          \"elements\": [ ${2:FirstElementList}",
			"              ]",
			"            }",
			"          ]",
			"        },",
			"        {",
			"          \"type\": \"Category\",",
			"          \"label\": \"${3:SecondCategoryName}\",",
			"          \"elements\": [",
			"            {",
			"              \"type\": \"VerticalLayout\",",
			"              \"elements\": [ ${4:SecondElementList}",
			"              ]",
			"            }",
			"          ]",
			"        }",
			"      ],",
			"      \"options\": {",
			"        \"variant\": \"stepper\"",
			"      }",
			"    }",
			"  ]",
			"}"
		],
		"description": "Create a Stepper Component"
	}
*/
