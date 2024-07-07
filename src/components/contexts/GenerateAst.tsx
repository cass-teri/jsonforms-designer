export function GenerateAst(data_schema: any, ui_schema: string): object {
    // To build out a drag and drop interface, we need to generate an AST from the data schema and ui schema
    const data_model = GenerateDataModel(data_schema)
    const ui_model = GenerateUiModel(ui_schema)

    return {}
}

function GenerateDataModel(data_schema: any): object {
    return {}
}

function GenerateUiModel(ui_schema: string): object {
    return {}
}
