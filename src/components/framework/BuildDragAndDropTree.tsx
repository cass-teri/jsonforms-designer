import { AstEntry } from "@/types/AstEntry.ts"

export function BuildDragAndDropTree(model: object, ast: AstEntry) {
    const tree: any = {
        name: model.name,
        children: []
    }

    return tree
}
