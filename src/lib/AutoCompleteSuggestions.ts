import * as monaco from 'monaco-editor'


export function AutoCompleteSuggestions(range: monaco.IRange) {

    return [
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
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
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
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range

        },
        {
            documentation: "JSON Data Integer",
            label: "jf_data_integer",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "\"${1:Name}\": {",
                "    \"type\": \"integer\",",
                "    \"description\":\"${2:Description}\"",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range

        },
        {
            documentation: "JSON Data Number (Decimal)",
            label: "jf_data_number",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "\"${1:Name}\": {",
                "    \"type\": \"number\",",
                "    \"description\":\"${2:Description}\"",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range

        },
        {
            documentation:"JSON Data Start",
            label:"jf_data_start",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\": \"object\",",
                "    \"properties\": {",
                "        ${1:Props}",
                "    }",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
        },

        {
            documentation: "JSON Data Validation",
            label: "jf_data_validation",
            insertText: ["\"${1:Name}\": {",
                "    \"type\": \"string\",",
                "    \"description\":\"${2:Description}\",",
                "    \"pattern\":\"${3:RegularExpression}\"",
                "}"].join('\n'),
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range

        },{

            documentation: "JSON Data Enumeration",
            label: "jf_data_enumeration",
            insertText: `
"\${1:Name}": {
    "type": "string",
    "description":"\${2:Description}",
    "enum":[\${3:Enumerations}]
}
`,
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {

            documentation: "JSON UI Control",
            label: "jf_ui_control",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\":\"Control\",",
                "    \"scope\":\"#/properties/${1:Scope}\"",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range

        },
        {
            documentation: "JSON UI Control with Label",
            label: "jf_ui_control_label",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\":\"Control\",",
                "    \"scope\":\"#/properties/${1:Scope}\",",
                "    \"label\":\"${2:Scope}\"",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
            documentation: "JSON UI Radio",
            label: "jf_ui_radio",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\":\"Control\",",
                "    \"scope\":\"#/properties/${1:Scope}\",",
                "    \"options\":{",
                "        \"type\": \"radio\"",
                "    }",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {

            documentation:"JSON UI Horizontal Layout",
            label: "jf_ui_horizontal",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\":\"HorizontalLayout\",",
                "    \"elements\":[${1:Elements} ]",
                "}"
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
        },
        {
            documentation: "JSON UI Vertical Layout",
            label: "jf_ui_vertical",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\":\"VerticalLayout\",",
                "    \"elements\":[ ${1:Elements} ]",
                "}"].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
        },
        {
            documentation: "JSON UI Group Layout",
            label: "jf_ui_group",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
                "{",
                "    \"type\":\"Group\",",
                "    \"elements\":[ ${1:Elements} ]",
                "}"].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
        },
        {
            documentation: "JSON UI Array",
            label: "jf_data_array",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
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
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
        },
        {
            documentation: "JSON UI Stepper",
            label: "jf_ui_stepper",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
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
            ].join("\n"),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
        },
        {
            documentation: "Header",
            label: "jf_ui_header",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
{
    "type": "HelpContent",
    "label": "\${1:Header}"
},`
        },
        {
            documentation: "SubHeader",
            label: "jf_ui_subheader",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
 {
    "type": "HelpContent",
    "elements": [
        {
            "type": "HelpContent",
            "label": "\${1:SubHeader}"
        }
    ]
}           
`
        },{
            documentation: "Bullets",
            label: "jf_ui_bullets",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
{
    "type": "HelpContent",
    "elements": [
        {
            "type": "HelpContent",
            "label": "\${1:BulletLabel}",
            "options": {
                "help": [
                    "\${2:BulletOne}",
                    "\${3:BulletTwo}"
                ]
            }
        }
    ]
}`
        },{

            documentation: "Details Show/Hide",
            label: "jf_ui_details",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
{
    "type": "HelpContent",
    "label": "\${1:DetailsTitle}",
    "elements": [
    {
        "type": "HelpContent",
        "options": {
            "help": "\${2:DetailsContent}"
        }
    }
    ],
    "options": {
        "variant": "details"
    }
}`
        },{
            documentation: "Paragraph",
            label: "jf_ui_paragraph",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
{
    "type": "HelpContent",
    "label": "\${1:ParagraphHeader}",
    "options": {
        "help": "\${2:ParagraphContent}"
    }
},
`
        },
        {
            documentation: "NestedParagraph",
            label: "jf_ui_nested_paragraph",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
{
    "type": "HelpContent",
    "label": "\${1:ParagraphHeader}",
    "options": {
        "help": "\${2:PrimaryParagraph}"
    },
    "elements": [
        {
            "type": "HelpContent",
            "label": "\${3:SecondHeader}",
            "options": {
                "help": "\${4:SecondParagraph}"
            }
        }
    ]
}`
        },{
            documentation: "Image",
            label: "jf_ui_image",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `    
{
    "type": "HelpContent",
    "label": "\${1:ImageLabel}",
    "options": {
        "variant": "img",
        "width": "\${2:Width}",
        "height": "\${3:Height}",
        "alt": "\${4:AltText}",
        "src": "https://picsum.photos/\${2:Width}/\${3:Height}"
    }
}       
`
        },{
            documentation: "Link",
            label: "jf_ui_link",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
{
    "type": "HelpContent",
    "options": {
        "variant": "hyperlink",
        "help": "\${1:LinkText}",
        "link": "\${2:URL}"
    }
}           
`
        },
        {
            documentation: "Province Dropdown",
            label: "jf_ui_province",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
"province": {
    "type": "string",
    "enum": [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Québec",
        "Saskatchewan",
        "Yukon"
    ]
}`
        },
        {
            documentation: "Boolean",
            label: "jf_data_boolean",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
"\${1:Name}": {
    "type": "boolean",
    "description":"\${2:Description}"
}`
        },
        {
            description: "Phone Number",
            label: "jf_data_phone",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
"\${1:Name}": {
    "type": "string",
    "description":"\${2:Description}",
    "pattern": "^\\\\\\d{3}[ -]?\\\\\\d{3}[ -]?\\\\\\d{4}$"
}`
        },
        {
            description: "Email",
            label: "jf_data_email",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `
"\${1:Name}": {
    "type": "string",
    "description":"\${2:Description}",
    "pattern": "^.+@.+\\\\\\..{2,}$"
}`
        },
        {
            description: "Postal Code",
            label: "jf_data_postal",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            insertText: `   
"\${1:Name}": {
    "type": "string",
    "description":"\${2:Description}",
    "pattern": "^[A-Za-z]\\\\\\d[A-Za-z][ -]?\\\\\\d[A-Za-z]\\\\\\d$"
}`
        }
    ]
}
