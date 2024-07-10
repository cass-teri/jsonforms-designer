import { ComponentButton } from "@/components/framework/ComponentButton.tsx"
import { motion } from "framer-motion"
import { MarkdownButton } from "@/components/editor_components/displays/Markdown/MarkdownButton.tsx"
import { BulletButton } from "@/components/editor_components/displays/Bullet/BulletButton.tsx"
import { FormButton } from "@/components/editor_components/containers/Form/FormButton.tsx"
import { IntegerButton } from "@/components/editor_components/inputs/Integer/IntegerButton.tsx"
import { EmailButton } from "@/components/editor_components/inputs/Email/EmailButton.tsx"
import { LabelButton } from "@/components/editor_components/displays/Label/LabelButton.tsx"
import { ImageButton } from "@/components/editor_components/displays/Image/ImageButton.tsx"
import { VideoButton } from "@/components/editor_components/displays/Video/VideoButton.tsx"
import { DecimalButton } from "@/components/editor_components/inputs/Decimal/DecimalButton.tsx"
import { CheckboxButton } from "@/components/editor_components/inputs/Checkbox/CheckboxButton.tsx"
import { RadioButton } from "@/components/editor_components/inputs/Radio/RadioButton.tsx"
import { DateButton } from "@/components/editor_components/inputs/Date/DateButton.tsx"
import { DropdownButton } from "@/components/editor_components/inputs/Dropdown/DropdownButton.tsx"
import { TimeButton } from "@/components/editor_components/inputs/Time/TimeButton.tsx"
import { ButtonButton } from "@/components/editor_components/control/Button/ButtonButton.tsx"
import { HorizontalButton } from "@/components/editor_components/containers/Horizontal/HorizontalButton.tsx"
import { VerticalButton } from "@/components/editor_components/containers/Vertical/VerticalButton.tsx"
import { TextButton } from "@/components/editor_components/inputs/Text/TextButton.tsx"
import { GroupButton } from "@/components/editor_components/containers/Group/GroupButton.tsx"
import { RepeaterButton } from "@/components/editor_components/containers/Repeater/RepeaterButton.tsx"
import { LinkButton } from "@/components/editor_components/displays/Link/LinkButton.tsx"
import { ParagraphButton } from "@/components/editor_components/displays/Paragraph/ParagraphButton.tsx"

export function ComponentPanel() {
    return (
        <motion.aside className="fixed top-14 left-0 bottom-0 bg-background text-foreground w-32 shadow-2xl">
            <hr />
            <div className="flex flex-row justify-center items-center ">Layout</div>
            <hr />
            <div className="grid grid-cols-2 mb-2">
                <ComponentButton componentButton={FormButton} />
                <ComponentButton componentButton={HorizontalButton} />
                <ComponentButton componentButton={VerticalButton} />
                <ComponentButton componentButton={GroupButton} />
                <ComponentButton componentButton={RepeaterButton} />
            </div>
            <hr />
            <div className="flex flex-row justify-center items-center ">Input</div>
            <hr />
            <div className="grid grid-cols-2 my-3">
                <ComponentButton componentButton={TextButton} />
                <ComponentButton componentButton={IntegerButton} />
                <ComponentButton componentButton={DecimalButton} />
                <ComponentButton componentButton={DropdownButton} />
                <ComponentButton componentButton={CheckboxButton} />
                <ComponentButton componentButton={RadioButton} />
                <ComponentButton componentButton={DateButton} />
                <ComponentButton componentButton={TimeButton} />
                <ComponentButton componentButton={EmailButton} />
            </div>
            <hr />
            <div className="flex flex-row justify-center items-center ">Content</div>
            <hr />
            <div className="grid grid-cols-2 my-3">
                <ComponentButton componentButton={BulletButton} />
                <ComponentButton componentButton={ImageButton} />
                <ComponentButton componentButton={LabelButton} />
                <ComponentButton componentButton={LinkButton} />
                <ComponentButton componentButton={ParagraphButton} />
                <ComponentButton componentButton={MarkdownButton} />
                <ComponentButton componentButton={VideoButton} />
            </div>
            <hr />
            <div className="flex flex-row justify-center items-center ">Control</div>
            <hr />
            <div className="grid grid-cols-2 my-3">
                <ComponentButton componentButton={ButtonButton} />
            </div>
        </motion.aside>
    )
}
