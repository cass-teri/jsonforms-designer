import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/contexts/ThemeProvider.tsx"

interface ThemeToggleProps {
    className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme()

    return (
        <div className={className}>
            {theme === "light" ? (
                <button
                    title="Change to Dark Mode"
                    className="w-10 h-10 flex flex-col justify-center items-center"
                    onClick={() => setTheme("dark")}
                >
                    <Moon className="w-8 h-8" />
                </button>
            ) : (
                <button
                    title="Change to Light Mode"
                    className="w-10 h-10 flex flex-col justify-center items-center"
                    onClick={() => setTheme("light")}
                >
                    <Sun className="w-8 h-8" />
                </button>
            )}
        </div>
    )
}
