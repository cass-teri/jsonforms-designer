import React, { useContext } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { json } from "@codemirror/lang-json"
import { basicLight, gruvboxDark } from "@uiw/codemirror-themes-all"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaDesignerContext } from "@/components/contexts/SchemaContextProvider.tsx"
import { vim } from "@replit/codemirror-vim"
import { VimModeContext } from "@/components/contexts/VimModeContextProvider.tsx"

export function DataSchemaEditor() {
    const { data_buffer, SetDataBuffer, SetIsDirty } = useContext(SchemaDesignerContext)
    const theme = useTheme()
    const { vim_mode } = useContext(VimModeContext)

    const code_theme = theme.theme === "dark" ? gruvboxDark : basicLight

    function OnDrop(e: any) {
        e.preventDefault()
        SetIsDirty(true)
        SetDataBuffer("")
    }

    const onChange = React.useCallback(
        //(val: string, viewUpdate: any) => {
        (val: string) => {
            SetIsDirty(true)
            SetDataBuffer(val)
        },
        [SetIsDirty, SetDataBuffer]
    )

    //Clean this up, use push to extend the extensions array with vim instead of using a ternary
    return (
        <div className="bg-background h-svh">
            {vim_mode ? (
                <CodeMirror
                    theme={code_theme}
                    value={data_buffer}
                    height="95vh"
                    width="100vw"
                    extensions={[json(), vim()]}
                    onChange={onChange}
                    onDrop={OnDrop}
                />
            ) : (
                <CodeMirror
                    theme={code_theme}
                    value={data_buffer}
                    height="95vh"
                    width="100vw"
                    extensions={[json()]}
                    onChange={onChange}
                    onDrop={OnDrop}
                />
            )}
        </div>
    )
}
