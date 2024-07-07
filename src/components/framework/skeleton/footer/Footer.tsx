import { useVimMode } from "@/components/contexts/VimModeContextProvider.tsx"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"

export function Footer() {
    const { vim_mode } = useVimMode()
    const { theme } = useTheme()
    const { is_dirty } = useSchema()

    let vim_mode_message = "Normal Mode"
    if (vim_mode) {
        vim_mode_message = "Vim Mode"
    }

    let theme_message = "Light Theme"
    if (theme === "dark") {
        theme_message = "Dark Theme"
    }

    let dirty_message = ""
    let dirty_color
    if (is_dirty) {
        dirty_color = "bg-red-200 text-black"
        dirty_message = "Unsaved Changes"
    }

    return (
        <div className="fixed h-8 bottom-0 left-0 right-0 bg-accent flex flex-row ">
            <div className="m-1 h-6 w-full">Status Message</div>
            <div className="m-1 border border-border h-6 w-32 flex items-center justify-center">{vim_mode_message}</div>
            <div className="m-1 border border-border h-6 w-32 flex items-center justify-center">{theme_message}</div>
            <div className={`m-1 border border-border h-6 w-48 flex items-center justify-center ${dirty_color}`}>
                {dirty_message}
            </div>
        </div>
    )
}
