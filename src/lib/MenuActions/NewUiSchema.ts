export async function NewUiSchema(SetUiBuffer: (data: string) => void, SetIsUiDirty: (is_data_dirty: boolean) => void, SetUiSchemaPath: (path: string) => void, SetUiSchema: (schema: string) => void){
    SetUiBuffer("{}")
    SetIsUiDirty(true)
    SetUiSchemaPath("")
    SetUiSchema("{}")
}
