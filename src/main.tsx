import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./globals.css"
import { ThemeProvider } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaContextProvider } from "@/components/contexts/SchemaContextProvider.tsx"
import { VimModeContextProvider } from "@/components/contexts/VimModeContextProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SchemaContextProvider>
            <VimModeContextProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </VimModeContextProvider>
        </SchemaContextProvider>
    </React.StrictMode>
)
