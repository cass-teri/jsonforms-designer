import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./globals.css"
import { ThemeProvider } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaContextProvider } from "@/components/contexts/SchemaContextProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SchemaContextProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </SchemaContextProvider>
    </React.StrictMode>
)
