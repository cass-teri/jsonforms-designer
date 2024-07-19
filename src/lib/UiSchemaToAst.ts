import {AstEntry} from "@/lib/AstEntry.tsx";

function ParseEntry(entry: any): AstEntry {
    const ast_entry: AstEntry = {
        type: entry.type,
        scope: entry.scope,
        suggestion: entry.suggestion
    }

    if (entry.options) {
        ast_entry.options = {
            multi: entry.options.multi,
            slider: entry.options.slider,
            restrict: entry.options.restrict,
            toggle: entry.options.toggle,
            help: entry.options.help,
            placeholder: entry.options.placeholder,
            label: entry.options.label
        }
    }

    if (entry.elements) {
        entry.elements.forEach((element: any) => {
            if (ast_entry.elements == null) {
                ast_entry.elements = []
            }

            ast_entry.elements.push(ParseEntry(element))
        })
    }

    return ast_entry
}

export function UiSchemaToAst(ui_buffer: string) {
    const ui_json = JSON.parse(ui_buffer)
    return ParseEntry(ui_json)
}
