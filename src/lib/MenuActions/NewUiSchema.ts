export async function NewUiSchema(SetUiBuffer: (data: string) => void, SetIsUiDirty: (is_data_dirty: boolean) => void) {
    SetUiBuffer("{}")
    SetIsUiDirty(true)
}
