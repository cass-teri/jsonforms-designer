import { useContext } from "react"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaDesignerContext } from "@/components/contexts/SchemaContextProvider.tsx"
import Editor from "@monaco-editor/react"
import {suggestions} from "@/lib/suggestions"

export function DataSchemaEditor() {
    const { data_buffer, SetDataBuffer, SetIsDirty } = useContext(SchemaDesignerContext)
    const theme = useTheme()

    function OnDrop(e: any) {
        e.preventDefault()
        SetIsDirty(true)
        SetDataBuffer("")
    }

    async function OnChange(source: any) {
        SetIsDirty(true)
        SetDataBuffer(source)
    }


    function OnMount( editor: any, monaco: any) {
        monaco.languages.registerCompletionItemProvider('json', {
            provideCompletionItems: () => {
                return {
                    suggestions: suggestions
                };
            }
        });

        editor.trigger('keyboard', 'editor.action.triggerSuggest', {});

    }

    //Clean this up, use push to extend the extensions array with vim instead of using a ternary
    return (
        <div className="bg-background h-svh" onDrop={OnDrop}>
            <Editor
                value={data_buffer}
                height="95vh"
                width="100vw"
                defaultLanguage="json"
                options={{
                    minimap: { enabled: false },
                    wordWrap: "on",
                    lineNumbers: "on",
                    fontSize: 16,
                    tabSize: 4,
                    insertSpaces: true,
                    autoIndent: "full",
                    formatOnType: true,
                    formatOnPaste: true,
                    dragAndDrop: true,
                    theme: theme.theme == "dark" ? "vs-dark" : "vs-light"
                }}
                onChange={OnChange}
                onMount={OnMount}
            />
        </div>
    )
}
