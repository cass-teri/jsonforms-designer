export async function NewDataSchema(
    SetDataBuffer: (data: string) => void,
    SetIsDataDirty: (is_data_dirty: boolean) => void,
    SetDataSchemaPath: (path: string) => void,
    SetDataSchema: (schema: string) => void){
    SetDataSchemaPath("")
    SetDataBuffer("{}")
    SetIsDataDirty(true)
    SetDataSchema("{}")
}
