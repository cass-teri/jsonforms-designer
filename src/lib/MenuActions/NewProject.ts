import { open } from "@tauri-apps/api/dialog"

export async function NewProject() {
    try {
        const selected = await open({
            directory: true
        })
        if (typeof selected === "string") {
            console.log(selected)
        }
    } catch (e: any) {
        console.error(e)
        return e.message
    }
}
