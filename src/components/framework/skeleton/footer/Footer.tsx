import { useTheme } from "@/components/contexts/ThemeProvider.tsx"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { useStatusMessage } from "@/components/contexts/StatusMessageProvider.tsx"

export function Footer() {
    const { theme } = useTheme()
    const { is_data_dirty, is_ui_dirty } = useSchema()
    const { status_message } = useStatusMessage()

    let theme_message = "Light Theme"
    if (theme === "dark") {
        theme_message = "Dark Theme"
    }

    let dirty_message = ""
    let dirty_color
    if (is_data_dirty || is_ui_dirty) {
        dirty_color = "bg-red-200 text-black"
        dirty_message = "Unsaved Changes"
    }

    return (
        <div className="fixed h-8 bottom-0 left-0 right-0 bg-accent flex flex-row ">
            <div className="m-1 h-6 w-full">{status_message.message}</div>
            <div className="m-1 border border-border h-6 w-32 flex items-center justify-start overflow-hidden text-nowrap">
                {theme_message}
            </div>
            <div
                className={`m-1 border border-border h-6 w-48 flex items-center justify-start overflow-hidden text-nowrap ${dirty_color}`}
            >
                {dirty_message}
            </div>
        </div>
    )
}
