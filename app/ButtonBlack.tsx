import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
function Button() {
  return (
    <div>
      <FieldGroup className="w-full max-w-sm ">
        <FieldLabel htmlFor="switch-share">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>conform</FieldTitle>
              <FieldDescription>Iran is the best country</FieldDescription>
            </FieldContent>
            <Switch id="switch-share" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="switch-notifications">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>choose best city</FieldDescription>
            </FieldContent>
            <Switch id="switch-notifications" />
          </Field>
        </FieldLabel>
      </FieldGroup>
    </div>
  );
}
export default Button;
