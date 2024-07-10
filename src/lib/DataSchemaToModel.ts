import { DataModelEntry } from "@/types/DataModelEntry.ts"

function ParseEntry(json_schema: any) {
    const entry: DataModelEntry = {} as DataModelEntry
    Object.keys(json_schema).forEach((key) => {
        entry.name = key
        if (typeof json_schema[key] === "object") {
            if (json_schema[key].type) {
                entry.type = json_schema[key].type
            }
            if (json_schema[key].required) {
                entry.required = json_schema[key].required
            }
            if (json_schema[key].default) {
                entry.default = json_schema[key].default
            }
            if (json_schema[key].description) {
                entry.description = json_schema[key].description
            }
            if (json_schema[key].pattern) {
                entry.pattern = json_schema[key].pattern
            }
            if (json_schema[key].minLength) {
                entry.minLength = json_schema[key].minLength
            }
            if (json_schema[key].maxLength) {
                entry.maxLength = json_schema[key].maxLength
            }
            if (json_schema[key].minimum) {
                entry.minimum = json_schema[key].minimum
            }
            if (json_schema[key].maximum) {
                entry.maximum = json_schema[key].maximum
            }
            if (json_schema[key].enum) {
                entry.enum = json_schema[key].enum
            }
            if (json_schema[key].properties) {
                entry.properties = []

                if (json_schema[key].properties) {
                    Object.entries(json_schema[key].properties).forEach(([prop_key, prop_value]) => {
                        const sub_entry = ParseEntry({ [prop_key]: prop_value })
                        if (sub_entry) {
                            if (entry.properties == null) {
                                entry.properties = []
                            }
                            entry.properties.push(sub_entry)
                        }
                    })
                }
            }
        }
    })
    return entry
}

export function DataSchemaToModel(data_schema: string): object {
    const data_scheme_rooted = `{ "___root": ${data_schema} }`
    const json_schema = JSON.parse(data_scheme_rooted)

    return ParseEntry(json_schema)
}
