import { DisplayComponent } from "@/components/editor_components/displays/DisplayComponent.ts"
import { ReactNode } from "react"

export class BulletComponent extends DisplayComponent {
    bullets: string[] = []

    AddBullet(bullet: string): void {
        this.bullets.push(bullet)
    }

    RemoveBullet(bullet: string): void {
        this.bullets.splice(this.bullets.indexOf(bullet), 1)
    }

    SetBullets(bullets: string[]): void {
        this.bullets = bullets
    }

    render(): ReactNode {
        return (
            <ul>
                {this.bullets.map((item: string) => {
                    return <li>{item}</li>
                })}
            </ul>
        )
    }
}
