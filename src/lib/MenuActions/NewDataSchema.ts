export async function NewDataSchema(
    SetDataBuffer: (data: string) => void,
    SetIsDataDirty: (is_data_dirty: boolean) => void
) {
    SetDataBuffer("{}")
    SetIsDataDirty(true)
}
