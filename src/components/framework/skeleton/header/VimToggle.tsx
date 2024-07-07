import { useVimMode } from "@/components/contexts/VimModeContextProvider"
import { RiFontSize } from "react-icons/ri"
import { GrVimeo } from "react-icons/gr"

interface VimToggleProps {
    className?: string
}

export function VimToggle({ className }: VimToggleProps) {
    const { vim_mode, SetVimMode } = useVimMode()

    function ToggleVimMode() {
        SetVimMode(!vim_mode)
    }

    return (
        <div className={className}>
            {vim_mode ? (
                <button
                    title="Change to Regular Mode"
                    className="w-12 h-12 flex items-center justify-center"
                    onClick={ToggleVimMode}
                >
                    <RiFontSize className="w-8 h-8" />
                </button>
            ) : (
                <button
                    title="Change to Vim Mode"
                    className="w-12 h-12 flex items-center justify-center"
                    onClick={ToggleVimMode}
                >
                    <GrVimeo className="w-8 h-8" />
                </button>
            )}
        </div>
    )
}
