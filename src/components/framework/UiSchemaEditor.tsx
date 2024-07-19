import { useContext } from "react"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaDesignerContext } from "@/components/contexts/SchemaContextProvider.tsx"
import Editor from "@monaco-editor/react"
import { AutoCompleteSuggestions } from "@/lib/AutoCompleteSuggestions.ts"

export function UiSchemaEditor() {
    const { ui_buffer, SetUiBuffer, SetIsDirty } = useContext(SchemaDesignerContext)
    const theme = useTheme()

    const code_theme = theme.theme === "dark" ? "vs-dark" : "vs-light"

    async function OnChange(source: any) {
        SetIsDirty(true)
        SetUiBuffer(source)
    }

    function OnMount(_: any, monaco: any) {
        monaco.languages.registerCompletionItemProvider("json", {
            provideCompletionItems: function (model: any, position: any) {
                // find out if we are completing a property in the 'dependencies' object.
                const textUntilPosition = model.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: position.lineNumber,
                    endColumn: position.column
                })
                const match = textUntilPosition.match(/.*/)
                if (!match) {
                    return { suggestions: [] }
                }
                const word = model.getWordUntilPosition(position)
                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn
                }
                return {
                    suggestions: AutoCompleteSuggestions(range)
                }
            }
        })
    }

    //Clean this up, use push to extend the extensions array with vim instead of using a ternary
    return (
        <div className="bg-background h-svh">
            <Editor
                theme={code_theme}
                value={ui_buffer}
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
                    theme: theme.theme == "dark" ? "vs-dark" : "vs-light",
                    suggestOnTriggerCharacters: true,
                    quickSuggestions: {
                        other: true,
                        comments: false,
                        strings: false
                    },
                    renderLineHighlight: "all",

                    guides: {
                        bracketPairs: true,
                        highlightActiveIndentation: true
                    }
                }}
                onChange={OnChange}
                onMount={OnMount}
            />
        </div>
    )
}
