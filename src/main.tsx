import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./globals.css"
import { ThemeProvider } from "@/components/contexts/ThemeProvider.tsx"
import { SchemaContextProvider } from "@/components/contexts/SchemaContextProvider.tsx"
import {StatusMessageContextProvider} from "@/components/contexts/StatusMessageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StatusMessageContextProvider>
            <SchemaContextProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </SchemaContextProvider>
        </StatusMessageContextProvider>
    </React.StrictMode>
)
