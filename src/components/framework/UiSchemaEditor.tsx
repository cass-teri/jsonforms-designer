import React, { useContext } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { json , jsonLanguage} from "@codemirror/lang-json"
import { githubLight, githubDark } from "@uiw/codemirror-themes-all"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaDesignerContext } from "@/components/contexts/SchemaContextProvider.tsx"
import { vim } from "@replit/codemirror-vim"
import { VimModeContext } from "@/components/contexts/VimModeContextProvider.tsx"
import {CompletionContext} from "@codemirror/autocomplete"

export function UiSchemaEditor() {
    const { ui_buffer, SetUiBuffer, SetIsDirty } = useContext(SchemaDesignerContext)
    const theme = useTheme()
    const { vim_mode } = useContext(VimModeContext)

    function jsonCompletions(context: CompletionContext) {
        const word = context.matchBefore(/\w*/)
        if (word?.from == word?.to && !context.explicit)
            return null
        return {
            from: word?.from,
            options: [
                {label: "match", type: "keyword"},
                {label: "hello", type: "variable", info: "(World)"},
                {label: "control", type: "text", apply: `
               "_": {
                    "type": "Control",
                    "scope": "#/properties/_" 
               }
                `, detail: "macro"}
            ]
        }
    }

    const jsonDocCompletion = jsonLanguage.data.of({
        autocomplete:jsonCompletions
    })

    const code_theme = theme.theme === "dark" ?  githubDark: githubLight;

    function OnDrop(e: any) {
        e.preventDefault()
        SetIsDirty(true)
        SetUiBuffer("")
    }

    const onChange = React.useCallback(
        //(val: string, viewUpdate: any) => {
        (val: string) => {
            SetIsDirty(true)
            SetUiBuffer(val)
        },
        [SetIsDirty, SetUiBuffer]
    )

    //Clean this up, use push to extend the extensions array with vim instead of using a ternary
    return (
        <div className="bg-background h-svh">
            {vim_mode ? (
                <CodeMirror
                    theme={code_theme}
                    value={ui_buffer}
                    height="95vh"
                    width="100vw"
                    basicSetup={{
                        autocompletion: true,
                        history: true,
                        syntaxHighlighting: true,
                        lineNumbers: true,
                        completionKeymap: true,

                    }}
                    extensions={[json(), vim(), jsonDocCompletion]}
                    onChange={onChange}
                    onDrop={OnDrop}

                />
            ) : (
                <CodeMirror
                    theme={code_theme}
                    value={ui_buffer}
                    height="95vh"
                    width="100vw"
                    basicSetup={{
                        autocompletion: true,
                        history: true,
                        syntaxHighlighting: true,
                        lineNumbers: true,
                        completionKeymap: true
                    }}
                    extensions={[json(), jsonDocCompletion]}
                    onChange={onChange}
                    onDrop={OnDrop}
                />
            )}
        </div>
    )
}
