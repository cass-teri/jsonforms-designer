import { TextComponent } from "@/components/editor_components/inputs/Text/TextComponent.tsx"
import { CheckboxComponent } from "@/components/editor_components/inputs/Checkbox/CheckboxComponent.tsx"
import { IntegerComponent } from "@/components/editor_components/inputs/Integer/IntegerComponent.tsx"
import { DecimalComponent } from "@/components/editor_components/inputs/Decimal/DecimalComponent.tsx"
import { DateComponent } from "@/components/editor_components/inputs/Date/DateComponent.tsx"
import { DropdownComponent } from "@/components/editor_components/inputs/Dropdown/DropdownComponent.tsx"
import { EmailComponent } from "@/components/editor_components/inputs/Email/EmailComponent.tsx"
import { RadioComponent } from "@/components/editor_components/inputs/Radio/RadioComponent.tsx"
import { PostalCodeComponent } from "@/components/editor_components/inputs/PostalCode/PostalCodeComponent.tsx"
import { PhoneNumberComponent } from "@/components/editor_components/inputs/PhoneNumber/PhoneNumberComponent.tsx"
import { MarkdownComponent } from "@/components/editor_components/displays/Markdown/MarkdownComponent.tsx"
import { TimeComponent } from "@/components/editor_components/inputs/Time/TimeComponent.tsx"
import { createId } from "@paralleldrive/cuid2"
import { RepeaterComponent } from "@/components/editor_components/containers/Repeater/RepeaterComponent.tsx"
import { FormComponent } from "@/components/editor_components/containers/Form/FormComponent.tsx"
import { BulletComponent } from "@/components/editor_components/displays/Bullet/BulletComponent.tsx"
import { LabelComponent } from "@/components/editor_components/displays/Label/LabelComponent.tsx"
import { ImageComponent } from "@/components/editor_components/displays/Image/ImageComponent.tsx"
import { FileUploadComponent } from "@/components/editor_components/inputs/FileUpload/FileUploadComponent.tsx"
import { ParagraphComponent } from "@/components/editor_components/displays/Paragraph/ParagraphComponent.tsx"
import { LinkComponent } from "@/components/editor_components/displays/Link/LinkComponent.tsx"
import { HorizontalComponent } from "@/components/editor_components/containers/Horizontal/HorizontalComponent.tsx"
import { VerticalComponent } from "@/components/editor_components/containers/Vertical/VerticalComponents.tsx"
import { GroupComponent } from "@/components/editor_components/containers/Group/GroupComponent.tsx"
import { HeadingComponent } from "@/components/editor_components/displays/Heading/HeadingComponent.tsx"

export function GetComponentForSchemaName(data: string) {
    switch (data) {
        case "form":
            return new FormComponent(createId(), null)
        case "horizontal":
            return new HorizontalComponent(createId(), null)
        case "vertical":
            return new VerticalComponent(createId(), null)
        case "repeater":
            return new RepeaterComponent(createId(), null)
        case "group":
            return new GroupComponent(createId(), null)
        case "checkbox":
            return new CheckboxComponent(createId(), null)
        case "text":
            return new TextComponent(createId(), null)
        case "number":
            return new IntegerComponent(createId(), null)
        case "decimal":
            return new DecimalComponent(createId(), null)
        case "date":
            return new DateComponent(createId(), null)
        case "dropdown":
            return new DropdownComponent(createId(), null)
        case "email":
            return new EmailComponent(createId(), null)
        case "markdown":
            return new MarkdownComponent(createId(), null)
        case "radio":
            return new RadioComponent(createId(), null)
        case "postal_code":
            return new PostalCodeComponent(createId(), null)
        case "phone":
            return new PhoneNumberComponent(createId(), null)
        case "time":
            return new TimeComponent(createId(), null)
        case "bullet":
            return new BulletComponent(createId(), null)
        case "label":
            return new LabelComponent(createId(), null)
        case "image":
            return new ImageComponent(createId(), null)
        case "file_upload":
            return new FileUploadComponent(createId(), null)
        case "paragraph":
            return new ParagraphComponent(createId(), null)
        case "link":
            return new LinkComponent(createId(), null)
        case "heading":
            return new HeadingComponent(createId(), null)
        default:
            console.log(`Unknown component ${data}`)
    }
}
