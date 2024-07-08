import React, {useContext, useEffect} from "react"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaDesignerContext } from "@/components/contexts/SchemaContextProvider.tsx"
import { VimModeContext } from "@/components/contexts/VimModeContextProvider.tsx"
import Editor  from "@monaco-editor/react"
import * as prettier from "prettier"


export function UiSchemaEditor() {
    const { ui_buffer, SetUiBuffer, SetIsDirty } = useContext(SchemaDesignerContext)
    const theme = useTheme()
    const { vim_mode } = useContext(VimModeContext)

    const code_theme = theme.theme === "dark" ? "vs-dark" : "vs-light"

    function OnDrop(e: any, data: any) {
        e.preventDefault()
        SetIsDirty(true)
        SetUiBuffer("")
    }

    async function OnChange(source: any) {
        SetIsDirty(true)
        SetUiBuffer(source)
    }

    //Clean this up, use push to extend the extensions array with vim instead of using a ternary
    return (
        <div className="bg-background h-svh">
            {vim_mode ? (
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
                        theme: theme.theme == "dark" ? "vs-dark": "vs-light",

                    }}
                    onChange={OnChange}


                />
            ) : (
                <Editor
                    theme={code_theme}
                    value={ui_buffer}
                    height="95vh"
                    width="100vw"
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
                        theme: theme.theme == "dark" ? "vs-dark": "vs-light",
                    }}
                    onChange={OnChange}
                />
            )}
        </div>
    )
}
