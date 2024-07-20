import { useContext } from "react"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaDesignerContext } from "@/components/contexts/SchemaContextProvider.tsx"
import Editor from "@monaco-editor/react"
import { AutoCompleteSuggestions } from "@/lib/AutoCompleteSuggestions.ts"

export function DataSchemaEditor() {
    const { data_buffer, SetDataBuffer, SetIsDataDirty } = useContext(SchemaDesignerContext)
    const theme = useTheme()

    function OnDrop(e: any) {
        e.preventDefault()
        SetIsDataDirty(true)
        SetDataBuffer("")
    }

    async function OnChange(source: any) {
        SetIsDataDirty(true)
        SetDataBuffer(source)
    }

    function OnMount(_: any, monaco: any) {
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            comments: "ignore",
            trailingCommas: "ignore"
        })

        monaco.languages.registerCompletionItemProvider("json", {
            provideCompletionItems: () => {
                return {
                    suggestions: AutoCompleteSuggestions
                }
            }
        })
    }

    //Clean this up, use push to extend the extensions array with vim instead of using a ternary
    return (
        <div className="bg-background h-svh" onDrop={OnDrop}>
            <Editor
                value={data_buffer}
                height="95vh"
                width="100vw"
                language="json"
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
                    theme: theme.theme == "dark" ? "vs-dark" : "vs-light",
                    quickSuggestions: {
                        other: true,
                        comments: true,
                        strings: true
                    }
                }}
                onChange={OnChange}
                onMount={OnMount}
            />
        </div>
    )
}
