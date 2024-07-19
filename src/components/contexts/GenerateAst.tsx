
export function GenerateAst(data_schema: any, ui_schema: string): object {
    // To build out a drag and drop interface, we need to generate an AST from the data schema and ui schema
    const data_model = GenerateDataModel(data_schema)
    const ui_model = GenerateUiModel(ui_schema)

    console.log(data_model)
    console.log(ui_model)

    return {}
}

function GenerateDataModel(data_schema: any): object {
    console.log(data_schema)
    return {}
}

function GenerateUiModel(ui_schema: string): object {
    console.log(ui_schema)
    return {}
}
